'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar, { SidebarPage } from './Sidebar';
import { useWorkspace } from './WorkspaceProvider';
import { supabase } from '../lib/supabase';

function activePage(pathname: string): SidebarPage {
  if (pathname.startsWith('/orders')) return 'orders';
  if (pathname.startsWith('/invoices')) return 'invoices';
  if (pathname.startsWith('/ingredients')) return 'ingredients';
  if (pathname.startsWith('/recipes')) return 'recipes';
  if (pathname.startsWith('/menu')) return 'menu';
  if (pathname.startsWith('/stock')) return 'stock';
  return 'dashboard';
}

function sectionCopy(pathname: string) {
  if (pathname.startsWith('/orders')) {
    return ['Orders', 'No orders yet', 'Supplier ordering will start empty for this business.'];
  }
  if (pathname.startsWith('/invoices')) {
    return ['Invoices', 'No invoices yet', 'Invoices for this business will appear here only.'];
  }
  if (pathname.startsWith('/ingredients')) {
    return ['Ingredients', 'No ingredients yet', 'Build this business’s ingredient catalogue from scratch.'];
  }
  if (pathname.startsWith('/recipes')) {
    return ['Recipes', 'No recipes yet', 'Recipe costing starts with a completely clean library.'];
  }
  if (pathname.startsWith('/menu')) {
    return ['Menu', 'No menu items yet', 'This menu is separate from every other Kitchen Insights business.'];
  }
  if (pathname.startsWith('/stock')) {
    return ['Stock counts', 'No stock count yet', 'Stock history starts empty for this site.'];
  }
  return ['Insights', 'Clean workspace ready', 'This business starts with no inherited suppliers, products, invoices, recipes or stock data.'];
}

function CleanWorkspace() {
  const pathname = usePathname();
  const { workspace } = useWorkspace();
  const [title, emptyTitle, emptyCopy] = sectionCopy(pathname);

  return (
    <main className="app-shell">
      <Sidebar active={activePage(pathname)} />

      <section className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">{workspace?.organisationName ?? 'Kitchen Insights'}</p>
            <h1>{title}</h1>
            <p className="page-description">
              {workspace?.siteName ?? 'Your business workspace'}
            </p>
          </div>
        </header>

        {pathname === '/' && (
          <section className="stats-grid">
            <article className="stat-card">
              <p className="stat-label">Active suppliers</p>
              <p className="stat-value">0</p>
              <p className="stat-change neutral">Clean catalogue</p>
            </article>
            <article className="stat-card">
              <p className="stat-label">Products tracked</p>
              <p className="stat-value">0</p>
              <p className="stat-change neutral">Nothing inherited</p>
            </article>
            <article className="stat-card">
              <p className="stat-label">Invoices</p>
              <p className="stat-value">0</p>
              <p className="stat-change neutral">Business-specific only</p>
            </article>
            <article className="stat-card">
              <p className="stat-label">Recipes</p>
              <p className="stat-value">0</p>
              <p className="stat-change neutral">Fresh workspace</p>
            </article>
          </section>
        )}

        <section className="panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">Workspace</p>
              <h2>{emptyTitle}</h2>
            </div>
          </div>
          <p className="page-description">{emptyCopy}</p>
        </section>
      </section>
    </main>
  );
}

export default function WorkspaceGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { loading, user, workspace } = useWorkspace();

  useEffect(() => {
    if (!loading && pathname !== '/login' && !user) {
      router.replace('/login');
    }
  }, [loading, pathname, router, user]);

  if (pathname === '/login') {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <main className="login-page">
        <section className="login-card">
          <div className="login-brand">
            <div className="login-brand-mark">K</div>
            <div>
              <strong>Kitchen Insights</strong>
              <span>Loading workspace…</span>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (!user) {
    return null;
  }

  if (!workspace) {
    return (
      <main className="login-page">
        <section className="login-card">
          <div className="login-brand">
            <div className="login-brand-mark">K</div>
            <div>
              <strong>Kitchen Insights</strong>
              <span>No workspace assigned</span>
            </div>
          </div>
          <div className="login-heading">
            <p className="eyebrow">Access</p>
            <h1>Workspace unavailable</h1>
            <p>Your account is signed in, but it has not been assigned to a business site.</p>
          </div>
          <button
            type="button"
            className="primary-button login-button"
            onClick={async () => {
              await supabase.auth.signOut();
              router.replace('/login');
            }}
          >
            Sign out
          </button>
        </section>
      </main>
    );
  }

  // The original Azteca screens still contain legacy local/static data. Until each
  // module is moved to workspace-scoped Supabase data, other businesses get a
  // deliberately empty view so no legacy restaurant data can appear in the UI.
  if (workspace.organisationName !== 'Azteca London') {
    return <CleanWorkspace />;
  }

  return <>{children}</>;
}
