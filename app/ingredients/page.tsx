"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type IngredientPrice = {
  price: number;
  unit: string;
  supplier: string;
  product: string;
  updatedAt: string;
};

type IngredientRecord = {
  name: string;
  category: string;
  price: number | null;
  unit: string;
  supplier: string;
  supplierProduct: string;
  updatedAt: string;
};

const ingredientCategories: Record<string, string> = {
  Cod: "Fish",
  "Black cod": "Fish",
  "26/30 prawn": "Fish",
  "King prawn": "Fish",
  "Tuna loin": "Fish",
  Stonebass: "Fish",
  Trout: "Fish",
  Salmon: "Fish",

  Ribeye: "Meat",
  "Short rib": "Meat",
  "Pork belly": "Meat",
  "Chicken thigh": "Meat",
  "Birria beef": "Meat",
  "Carnitas pork": "Meat",

  "Masafina tortilla 12cm": "Dry goods",
  "Masafina tortilla 10cm": "Dry goods",
  "Masafina blue corn tortilla 12cm": "Dry goods",

  Miso: "Dry goods",
  Sugar: "Dry goods",
  Mirin: "Dry goods",
  Sake: "Dry goods",
  "Rice vinegar": "Dry goods",
  "Gram flour": "Dry goods",
  "Rice flour": "Dry goods",
  "Potato flour": "Dry goods",
  Cornstarch: "Dry goods",
  "Powdered milk": "Dry goods",

  Chives: "Produce",
  Coriander: "Produce",
  Shallot: "Produce",
  Lemongrass: "Produce",
  Lime: "Produce",
  Garlic: "Produce",
  "Spring onion": "Produce",
  "Kaffir lime leaf": "Produce",

  "Fish sauce": "Sauces",
  "Pickled jalapeño": "Sauces",
  "Aji Amarillo": "Sauces",
  "Kimchi no moto": "Sauces",

  "Grapeseed oil": "Oils",
  "Rapeseed oil": "Oils",

  Butter: "Dairy",
  Comté: "Dairy",

  "Black beans": "Dry goods",
  "Chipotle salt": "Dry goods",
};

const baseIngredients = Object.keys(ingredientCategories);

function money(value: number | null) {
  if (value === null) {
    return "—";
  }

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function formatDate(value: string) {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export default function IngredientsPage() {
  const [ingredients, setIngredients] = useState<IngredientRecord[]>([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    const storedPrices = JSON.parse(
      localStorage.getItem("ingredientPrices") || "{}"
    ) as Record<string, IngredientPrice>;

    const allNames = Array.from(
      new Set([
        ...baseIngredients,
        ...Object.keys(storedPrices),
      ])
    );

    const mapped: IngredientRecord[] = allNames.map((name) => {
      const stored = storedPrices[name];

      return {
        name,
        category:
          ingredientCategories[name] ?? "Uncategorised",
        price: stored?.price ?? null,
        unit: stored?.unit ?? "",
        supplier: stored?.supplier ?? "",
        supplierProduct: stored?.product ?? "",
        updatedAt: stored?.updatedAt ?? "",
      };
    });

    mapped.sort((a, b) => a.name.localeCompare(b.name));

    setIngredients(mapped);
  }, []);

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(
          ingredients.map((ingredient) => ingredient.category)
        )
      ).sort(),
    ];
  }, [ingredients]);

  const filteredIngredients = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return ingredients.filter((ingredient) => {
      const matchesSearch =
        !searchValue ||
        ingredient.name.toLowerCase().includes(searchValue) ||
        ingredient.supplier.toLowerCase().includes(searchValue) ||
        ingredient.supplierProduct
          .toLowerCase()
          .includes(searchValue);

      const matchesCategory =
        categoryFilter === "All" ||
        ingredient.category === categoryFilter;

      return matchesSearch && matchesCategory;
    });
  }, [ingredients, search, categoryFilter]);

  const pricedCount = ingredients.filter(
    (ingredient) => ingredient.price !== null
  ).length;

  const unpricedCount = ingredients.length - pricedCount;

  const supplierCount = new Set(
    ingredients
      .map((ingredient) => ingredient.supplier)
      .filter(Boolean)
  ).size;

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">A</div>

          <div>
            <p className="brand-name">
              Azteca Insights
            </p>

            <p className="brand-subtitle">
              Kitchen cost control
            </p>
          </div>
        </div>

        <nav
          className="sidebar-nav"
          aria-label="Main navigation"
        >
          <Link
            className="nav-link"
            href="/"
          >
            <span className="nav-icon">⌂</span>
            Dashboard
          </Link>

          <Link
            className="nav-link"
            href="/invoices"
          >
            <span className="nav-icon">▤</span>
            Invoices
          </Link>

          <Link
            className="nav-link nav-link-active"
            href="/ingredients"
          >
            <span className="nav-icon">◫</span>
            Ingredients
          </Link>

          <Link
            className="nav-link"
            href="/recipes"
          >
            <span className="nav-icon">◇</span>
            Recipes
          </Link>

          <Link
            className="nav-link"
            href="/menu"
          >
            <span className="nav-icon">☰</span>
            Menu
          </Link>

          <Link
            className="nav-link"
            href="/stock"
          >
            <span className="nav-icon">□</span>
            Stock counts
          </Link>
        </nav>

        <div className="sidebar-footer">
          <div className="restaurant-card">
            <div className="restaurant-avatar">
              AZ
            </div>

            <div>
              <p className="restaurant-name">
                Azteca
              </p>

              <p className="restaurant-location">
                Battersea, London
              </p>
            </div>
          </div>
        </div>
      </aside>

      <section className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">
              Master ingredient database
            </p>

            <h1>Ingredients</h1>

            <p className="page-description">
              Master ingredients linked to supplier products,
              invoice prices and recipe costing.
            </p>
          </div>

          <button
            className="primary-button"
            type="button"
          >
            + Add ingredient
          </button>
        </header>

        <section className="stats-grid">
          <article className="stat-card">
            <p className="stat-label">
              Total ingredients
            </p>

            <p className="stat-value">
              {ingredients.length}
            </p>

            <p className="stat-change neutral">
              Master ingredient records
            </p>
          </article>

          <article className="stat-card">
            <p className="stat-label">
              Priced
            </p>

            <p className="stat-value">
              {pricedCount}
            </p>

            <p className="stat-change neutral">
              Linked to invoice pricing
            </p>
          </article>

          <article className="stat-card">
            <p className="stat-label">
              Missing price
            </p>

            <p className="stat-value">
              {unpricedCount}
            </p>

            <p className="stat-change warning">
              Need supplier pricing
            </p>
          </article>

          <article className="stat-card">
            <p className="stat-label">
              Suppliers
            </p>

            <p className="stat-value">
              {supplierCount}
            </p>

            <p className="stat-change neutral">
              Supplying priced ingredients
            </p>
          </article>
        </section>

        <section className="panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">
                Ingredient library
              </p>

              <h2>Master ingredients</h2>
            </div>

            <span className="menu-section-count">
              {filteredIngredients.length}
            </span>
          </div>

          <div className="ingredient-toolbar">
            <div className="ingredient-search">
              <input
                type="search"
                placeholder="Search ingredients or supplier products..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>

            <div className="ingredient-filter">
              <select
                value={categoryFilter}
                onChange={(event) =>
                  setCategoryFilter(event.target.value)
                }
              >
                {categories.map((category) => (
                  <option
                    key={category}
                    value={category}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="table-wrapper">
            <table className="ingredients-table">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Category</th>
                  <th>Current cost</th>
                  <th>Basis</th>
                  <th>Supplier</th>
                  <th>Supplier product</th>
                  <th>Last updated</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {filteredIngredients.map((ingredient) => (
                  <tr key={ingredient.name}>
                    <td>
                      <div className="ingredient-name-cell">
                        <strong>
                          {ingredient.name}
                        </strong>
                      </div>
                    </td>

                    <td>
                      <span className="ingredient-category-badge">
                        {ingredient.category}
                      </span>
                    </td>

                    <td>
                      <strong>
                        {money(ingredient.price)}
                      </strong>
                    </td>

                    <td>
                      {ingredient.unit
                        ? `per ${ingredient.unit}`
                        : "—"}
                    </td>

                    <td>
                      {ingredient.supplier || "—"}
                    </td>

                    <td className="ingredient-product-cell">
                      {ingredient.supplierProduct || "—"}
                    </td>

                    <td>
                      {formatDate(ingredient.updatedAt)}
                    </td>

                    <td>
                      <span
                        className={`status-badge ${
                          ingredient.price !== null
                            ? "status-approved"
                            : "status-review"
                        }`}
                      >
                        {ingredient.price !== null
                          ? "Priced"
                          : "Needs price"}
                      </span>
                    </td>
                  </tr>
                ))}

                {filteredIngredients.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="empty-table-message"
                    >
                      No ingredients match your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}