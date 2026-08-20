"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import Sidebar, { SidebarPage } from "./Sidebar";
import { supabase } from "../lib/supabase";

const LEGACY_AZTECA_ORGANISATION_ID =
  "694a73e3-85ec-4c51-ae8f-9accd0bbd600";

type WorkspaceSectionGateProps = {
  active: SidebarPage;
  title: string;
  description: string;
  emptyTitle: string;
  emptyDescription: string;
  children: ReactNode;
};

type ActiveWorkspace = {
  organisationId: string;
  siteId: string;
};

export default function WorkspaceSectionGate({
  active,
  title,
  description,
  emptyTitle,
  emptyDescription,
  children,
}: WorkspaceSectionGateProps) {
  const [workspace, setWorkspace] =
    useState<ActiveWorkspace | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadWorkspace() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          if (!cancelled) {
            setWorkspace(null);
          }
          return;
        }

        const { data, error } = await supabase
          .from("user_workspace_selection")
          .select("organisation_id, site_id")
          .eq("user_id", user.id)
          .maybeSingle();

        if (error) {
          throw error;
        }

        if (!cancelled) {
          setWorkspace(
            data
              ? {
                  organisationId: data.organisation_id,
                  siteId: data.site_id,
                }
              : null
          );
        }
      } catch (error) {
        console.error("Could not load active workspace", error);

        if (!cancelled) {
          setWorkspace(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadWorkspace();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <main className="app-shell">
        <Sidebar active={active} />

        <section className="main-content">
          <header className="topbar">
            <div>
              <p className="eyebrow">Loading workspace</p>
              <h1>{title}</h1>
              <p className="page-description">{description}</p>
            </div>
          </header>

          <section className="panel">
            <p className="muted-text">Loading restaurant data…</p>
          </section>
        </section>
      </main>
    );
  }

  if (
    workspace?.organisationId ===
    LEGACY_AZTECA_ORGANISATION_ID
  ) {
    return <>{children}</>;
  }

  return (
    <main className="app-shell">
      <Sidebar active={active} />

      <section className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Restaurant workspace</p>
            <h1>{title}</h1>
            <p className="page-description">{description}</p>
          </div>
        </header>

        <section className="stats-grid">
          <article className="stat-card">
            <p className="stat-label">Total</p>
            <p className="stat-value">0</p>
            <p className="stat-change neutral">This workspace starts clean</p>
          </article>
        </section>

        <section className="panel">
          <p className="panel-kicker">Clean workspace</p>
          <h2>{emptyTitle}</h2>
          <p className="page-description">{emptyDescription}</p>
        </section>
      </section>
    </main>
  );
}
