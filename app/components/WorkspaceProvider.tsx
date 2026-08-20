'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

type Workspace = {
  organisationId: string;
  organisationName: string;
  siteId: string;
  siteName: string;
  siteLocation: string | null;
};

type WorkspaceContextValue = {
  loading: boolean;
  user: User | null;
  workspace: Workspace | null;
  profileName: string | null;
  refresh: () => Promise<void>;
};

const WorkspaceContext = createContext<WorkspaceContextValue>({
  loading: true,
  user: null,
  workspace: null,
  profileName: null,
  refresh: async () => {},
});

export function useWorkspace() {
  return useContext(WorkspaceContext);
}

export default function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  const [profileName, setProfileName] = useState<string | null>(null);

  async function loadForUser(nextUser: User | null) {
    setUser(nextUser);

    if (!nextUser) {
      setWorkspace(null);
      setProfileName(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    const { data: selection } = await supabase
      .from('user_workspace_selection')
      .select('organisation_id, site_id')
      .eq('user_id', nextUser.id)
      .maybeSingle();

    if (!selection) {
      setWorkspace(null);
      setProfileName(null);
      setLoading(false);
      return;
    }

    const [organisationResult, siteResult, profileResult] = await Promise.all([
      supabase
        .from('organisations')
        .select('id, name')
        .eq('id', selection.organisation_id)
        .maybeSingle(),
      supabase
        .from('sites')
        .select('id, name, location')
        .eq('id', selection.site_id)
        .maybeSingle(),
      supabase
        .from('profiles')
        .select('full_name')
        .eq('id', nextUser.id)
        .maybeSingle(),
    ]);

    if (organisationResult.data && siteResult.data) {
      setWorkspace({
        organisationId: organisationResult.data.id,
        organisationName: organisationResult.data.name,
        siteId: siteResult.data.id,
        siteName: siteResult.data.name,
        siteLocation: siteResult.data.location,
      });
    } else {
      setWorkspace(null);
    }

    setProfileName(profileResult.data?.full_name ?? null);
    setLoading(false);
  }

  async function refresh() {
    const { data } = await supabase.auth.getUser();
    await loadForUser(data.user ?? null);
  }

  useEffect(() => {
    let active = true;

    supabase.auth.getUser().then(({ data }) => {
      if (active) {
        void loadForUser(data.user ?? null);
      }
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      if (active) {
        void loadForUser(session?.user ?? null);
      }
    });

    return () => {
      active = false;
      subscription.subscription.unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({ loading, user, workspace, profileName, refresh }),
    [loading, user, workspace, profileName]
  );

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>;
}
