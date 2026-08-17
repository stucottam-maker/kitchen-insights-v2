'use client';

import Link from 'next/link';
import Sidebar from './components/Sidebar';
import { suppliers } from './data/suppliers';
import { supplierCatalogue } from './data/supplierCatalogue';
import { useMemo } from 'react';

function money(value: number) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function HomePage() {
  const supplierStats = useMemo(() => {
    return Object.values(suppliers)
      .slice(0, 6)
      .map((supplier: any) => {
        const products = supplierCatalogue.filter(
          (item: any) => item.supplier === supplier.name
        );

        return {
          name: supplier.name,
          products: products.length,
          spend: products.reduce(
            (total: number, item: any) => total + Number(item.price || 0),
            0
          ),
        };
      });
  }, []);

  return (
    <main className="app-shell">
      <Sidebar active="dashboard" />

      <section className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">Kitchen Intelligence</p>

            <h1>Insights</h1>

            <p className="page-description">
              Live purchasing, supplier and costing overview.
            </p>
          </div>

          <Link className="primary-button" href="/invoices/upload">
            + Upload invoice
          </Link>
        </header>

        <section className="stats-grid">
          <article className="stat-card">
            <p className="stat-label">Active suppliers</p>

            <p className="stat-value">{suppliers.length}</p>

            <p className="stat-change neutral">Catalogue connected</p>
          </article>

          <article className="stat-card">
            <p className="stat-label">Products tracked</p>

            <p className="stat-value">{supplierCatalogue.length}</p>

            <p className="stat-change neutral">Across suppliers</p>
          </article>

          <article className="stat-card">
            <p className="stat-label">Invoices processed</p>

            <p className="stat-value">6</p>

            <p className="stat-change neutral">Supabase connected</p>
          </article>

          <article className="stat-card">
            <p className="stat-label">Recipes</p>

            <p className="stat-value">Live</p>

            <p className="stat-change neutral">Costing ready</p>
          </article>
        </section>

        <section className="dashboard-grid">
          <article className="panel">
            <div className="panel-header">
              <div>
                <p className="panel-kicker">Purchasing</p>

                <h2>Supplier catalogue</h2>
              </div>

              <Link href="/orders" className="panel-link">
                Create order
              </Link>
            </div>

            <div className="supplier-spend-list">
              {supplierStats.map((supplier: any) => (
                <div className="supplier-spend-row" key={supplier.name}>
                  <div className="supplier-spend-heading">
                    <div>
                      <p className="supplier-name">{supplier.name}</p>

                      <p className="muted-text">{supplier.products} products</p>
                    </div>

                    <strong>{money(supplier.spend)}</strong>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-header">
              <div>
                <p className="panel-kicker">Quick actions</p>

                <h2>Kitchen tools</h2>
              </div>
            </div>

            <div className="activity-list">
              <Link href="/orders" className="activity-row">
                <div className="activity-dot" />

                <div className="activity-content">
                  <p className="activity-title">Build supplier order</p>

                  <p className="muted-text">Order from your catalogue</p>
                </div>
              </Link>

              <Link href="/stock" className="activity-row">
                <div className="activity-dot" />

                <div className="activity-content">
                  <p className="activity-title">Stock count</p>

                  <p className="muted-text">Update BOH inventory</p>
                </div>
              </Link>

              <Link href="/recipes" className="activity-row">
                <div className="activity-dot" />

                <div className="activity-content">
                  <p className="activity-title">Recipe costing</p>

                  <p className="muted-text">Review margins</p>
                </div>
              </Link>
            </div>
          </article>
        </section>

        <section className="dashboard-quick-actions">
          <Link href="/ingredients" className="quick-action-card">
            <span className="quick-action-icon">+</span>

            <div>
              <strong>Ingredients</strong>

              <p>Manage products and prices.</p>
            </div>
          </Link>

          <Link href="/invoices" className="quick-action-card">
            <span className="quick-action-icon">□</span>

            <div>
              <strong>Invoices</strong>

              <p>Review extracted invoices.</p>
            </div>
          </Link>

          <Link href="/menu" className="quick-action-card">
            <span className="quick-action-icon">◇</span>

            <div>
              <strong>Menu costing</strong>

              <p>Track dish profitability.</p>
            </div>
          </Link>
        </section>
      </section>
    </main>
  );
}
