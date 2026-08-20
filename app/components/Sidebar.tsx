"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { supabase } from "../lib/supabase";

export type SidebarPage =
  | "dashboard"
  | "orders"
  | "invoices"
  | "ingredients"
  | "recipes"
  | "menu"
  | "stock";

type SidebarProps = {
  active: SidebarPage;
};

type WorkspaceLabel = {
  organisationName: string;
  siteName: string;
  location: string | null;
};

export default function Sidebar({ active }: SidebarProps) {
  const [workspace, setWorkspace] = useState<WorkspaceLabel>({
    organisationName: "Kitchen Insights",
    siteName: "Loading workspace…",
    location: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function loadWorkspace() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          if (!cancelled) {
            setWorkspace({
              organisationName: "Kitchen Insights",
              siteName: "No active restaurant",
              location: null,
            });
          }
          return;
        }

        const { data: selection, error: selectionError } =
          await supabase
            .from("user_workspace_selection")
            .select("organisation_id, site_id")
            .eq("user_id", user.id)
            .maybeSingle();

        if (selectionError) {
          throw selectionError;
        }

        if (!selection) {
          if (!cancelled) {
            setWorkspace({
              organisationName: "Kitchen Insights",
              siteName: "No active restaurant",
              location: null,
            });
          }
          return;
        }

        const [organisationResult, siteResult] = await Promise.all([
          supabase
            .from("organisations")
            .select("name")
            .eq("id", selection.organisation_id)
            .maybeSingle(),
          supabase
            .from("sites")
            .select("name, location")
            .eq("id", selection.site_id)
            .maybeSingle(),
        ]);

        if (organisationResult.error) {
          throw organisationResult.error;
        }

        if (siteResult.error) {
          throw siteResult.error;
        }

        if (!cancelled) {
          setWorkspace({
            organisationName:
              organisationResult.data?.name ?? "Kitchen Insights",
            siteName: siteResult.data?.name ?? "Selected site",
            location: siteResult.data?.location ?? null,
          });
        }
      } catch (error) {
        console.error("Could not load sidebar workspace", error);
      }
    }

    loadWorkspace();

    return () => {
      cancelled = true;
    };
  }, []);

  const initials = useMemo(() => {
    const words = workspace.organisationName
      .split(/\s+/)
      .filter(Boolean);

    if (words.length === 0) return "KI";

    return words
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() ?? "")
      .join("");
  }, [workspace.organisationName]);

  function navClass(page: SidebarPage) {
    return active === page
      ? "nav-link nav-link-active"
      : "nav-link";
  }

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="sidebar-brand-mark">K</div>

        <div className="sidebar-brand-copy">
          <strong>Kitchen Insights</strong>
          <span>Cost & purchasing control</span>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <Link className={navClass("dashboard")} href="/">
          <span className="nav-icon">⌂</span>
          Dashboard
        </Link>

        <Link className={navClass("orders")} href="/orders">
          <span className="nav-icon">+</span>
          Orders
        </Link>

        <Link className={navClass("invoices")} href="/invoices">
          <span className="nav-icon">▤</span>
          Invoices
        </Link>

        <Link className={navClass("ingredients")} href="/ingredients">
          <span className="nav-icon">◫</span>
          Ingredients
        </Link>

        <Link className={navClass("recipes")} href="/recipes">
          <span className="nav-icon">◇</span>
          Recipes
        </Link>

        <Link className={navClass("menu")} href="/menu">
          <span className="nav-icon">☰</span>
          Menu
        </Link>

        <Link className={navClass("stock")} href="/stock">
          <span className="nav-icon">□</span>
          Stock counts
        </Link>
      </nav>

      <div className="sidebar-footer">
        <div className="restaurant-card">
          <div className="restaurant-avatar">{initials}</div>

          <div>
            <p className="restaurant-name">
              {workspace.organisationName}
            </p>

            <p className="restaurant-location">
              {workspace.location || workspace.siteName}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
