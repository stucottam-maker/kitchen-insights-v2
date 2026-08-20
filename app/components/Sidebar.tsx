'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';
import { useWorkspace } from './WorkspaceProvider';

export type SidebarPage =
  | 'dashboard'
  | 'orders'
  | 'invoices'
  | 'ingredients'
  | 'recipes'
  | 'menu'
  | 'stock';

type SidebarProps = {
  active: SidebarPage;
};

function initials(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('') || 'KI';
}

export default function Sidebar({ active }: SidebarProps) {
  const router = useRouter();
  const { workspace, profileName, user } = useWorkspace();

  function navClass(page: SidebarPage) {
    return active === page ? 'nav-link nav-link-active' : 'nav-link';
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace('/login');
    router.refresh();
  }

  const businessName = workspace?.organisationName ?? 'Kitchen Insights';
  const siteLabel = workspace?.siteLocation || workspace?.siteName || 'Workspace';

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
        <Link className={navClass('dashboard')} href="/">
          <span className="nav-icon">⌂</span>
          Dashboard
        </Link>
        <Link className={navClass('orders')} href="/orders">
          <span className="nav-icon">+</span>
          Orders
        </Link>
        <Link className={navClass('invoices')} href="/invoices">
          <span className="nav-icon">▤</span>
          Invoices
        </Link>
        <Link className={navClass('ingredients')} href="/ingredients">
          <span className="nav-icon">◫</span>
          Ingredients
        </Link>
        <Link className={navClass('recipes')} href="/recipes">
          <span className="nav-icon">◇</span>
          Recipes
        </Link>
        <Link className={navClass('menu')} href="/menu">
          <span className="nav-icon">☰</span>
          Menu
        </Link>
        <Link className={navClass('stock')} href="/stock">
          <span className="nav-icon">□</span>
          Stock counts
        </Link>
      </nav>

      <div className="sidebar-footer">
        <div className="restaurant-card">
          <div className="restaurant-avatar">{initials(businessName)}</div>
          <div>
            <p className="restaurant-name">{businessName}</p>
            <p className="restaurant-location">{siteLabel}</p>
          </div>
        </div>

        <button
          type="button"
          className="nav-link"
          onClick={handleLogout}
          style={{ width: '100%', border: 0, cursor: 'pointer', textAlign: 'left' }}
        >
          <span className="nav-icon">↪</span>
          Sign out
        </button>

        {(profileName || user?.email) && (
          <p className="restaurant-location" style={{ marginTop: 8 }}>
            {profileName || user?.email}
          </p>
        )}
      </div>
    </aside>
  );
}
