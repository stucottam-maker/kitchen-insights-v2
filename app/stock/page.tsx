"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  HistoricalStockItem,
  historicalStockTakes,
  latestHistoricalStockTake,
} from "../data/stockHistory";

type IngredientPrice = {
  price: number;
  unit: string;
  supplier: string;
  product: string;
  updatedAt: string;
};

type StockItem = Omit<
  HistoricalStockItem,
  "quantity"
> & {
  quantity: number | null;
  price: number | null;
  priceUnit: string;
  supplier: string;
};

type SavedStockTake = {
  id: string;
  createdAt: string;
  items: StockItem[];
};

type PageTab =
  | "current"
  | "history"
  | "compare";

type ComparisonRow = {
  name: string;
  category: string;
  unit: string;
  opening: number | null;
  closing: number | null;
  movement: number | null;
  percentage: number | null;
  price: number | null;
  valueMovement: number | null;
};

const ingredientAliases: Record<string, string> = {
  tuna: "Tuna loin",
  "black cod": "Black cod",
  cod: "Cod",
  "26/30 prawn": "26/30 prawn",
  "king prawn": "King prawn",
  ribeye: "Ribeye",
  "short rib": "Short rib",
  "pork belly chicharron": "Pork belly",
  "chicken thigh pastor marinade": "Chicken thigh",
  birria: "Birria beef",
  "carnitas service": "Carnitas pork",
};

function normalise(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/\s+/g, " ");
}

function ingredientPriceKey(name: string) {
  const key = normalise(name);

  return ingredientAliases[key] ?? name;
}

function money(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function formatDateTime(value: string) {
  if (!value) return "—";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function canonicalUnit(value: string) {
  const unit = value.trim().toLowerCase();

  if (
    unit === "l" ||
    unit === "litre" ||
    unit === "liter"
  ) {
    return "L";
  }

  if (unit === "kg") return "kg";
  if (unit === "g") return "g";
  if (unit === "ml") return "ml";
  if (unit === "each") return "each";

  return value || "kg";
}

function numericQuantity(
  value: number | string | null
) {
  if (typeof value === "number") {
    return value;
  }

  if (
    value === null ||
    value === ""
  ) {
    return null;
  }

  const parsed = Number(value);

  return Number.isNaN(parsed)
    ? null
    : parsed;
}

function calculateStockValue(item: StockItem) {
  if (
    item.quantity === null ||
    item.price === null
  ) {
    return 0;
  }

  const quantity = Number(item.quantity);
  const price = Number(item.price);

  if (
    Number.isNaN(quantity) ||
    Number.isNaN(price)
  ) {
    return 0;
  }

  const stockUnit = canonicalUnit(item.unit);
  const priceUnit = canonicalUnit(item.priceUnit);

  if (
    stockUnit === "g" &&
    priceUnit === "kg"
  ) {
    return (quantity / 1000) * price;
  }

  if (
    stockUnit === "kg" &&
    priceUnit === "g"
  ) {
    return quantity * 1000 * price;
  }

  if (
    stockUnit === "ml" &&
    priceUnit === "L"
  ) {
    return (quantity / 1000) * price;
  }

  if (
    stockUnit === "L" &&
    priceUnit === "ml"
  ) {
    return quantity * 1000 * price;
  }

  if (stockUnit === priceUnit) {
    return quantity * price;
  }

  return 0;
}

function buildCurrentStockItems(
  prices: Record<string, IngredientPrice>
): StockItem[] {
  return latestHistoricalStockTake.items.map((item) => {
    const priceKey =
      ingredientPriceKey(item.name);

    const storedPrice =
      prices[priceKey] ??
      prices[item.name];

    return {
      ...item,
      quantity:
        numericQuantity(
          item.quantity
        ),
      unit:
        canonicalUnit(
          item.unit
        ),
      price:
        storedPrice?.price ??
        null,
      priceUnit:
        storedPrice?.unit ??
        "",
      supplier:
        storedPrice?.supplier ??
        "",
    };
  });
}

function buildComparison(
  fromId: string,
  toId: string,
  prices: Record<string, IngredientPrice>
): ComparisonRow[] {
  const fromTake =
    historicalStockTakes.find(
      (take) => take.id === fromId
    );

  const toTake =
    historicalStockTakes.find(
      (take) => take.id === toId
    );

  if (!fromTake || !toTake) {
    return [];
  }

  const names = Array.from(
    new Set([
      ...fromTake.items.map((item) =>
        normalise(item.name)
      ),
      ...toTake.items.map((item) =>
        normalise(item.name)
      ),
    ])
  );

  return names.map((nameKey) => {
    const fromItem =
      fromTake.items.find(
        (item) =>
          normalise(item.name) ===
          nameKey
      );

    const toItem =
      toTake.items.find(
        (item) =>
          normalise(item.name) ===
          nameKey
      );

    const sourceItem =
      toItem ?? fromItem!;

    const opening =
      fromItem
        ? numericQuantity(
            fromItem.quantity
          )
        : null;

    const closing =
      toItem
        ? numericQuantity(
            toItem.quantity
          )
        : null;

    let movement: number | null = null;

    if (
      opening !== null &&
      closing !== null
    ) {
      movement =
        closing - opening;
    }

    let percentage: number | null = null;

    if (
      movement !== null &&
      opening !== null &&
      opening !== 0
    ) {
      percentage =
        (movement / opening) *
        100;
    }

    const priceKey =
      ingredientPriceKey(
        sourceItem.name
      );

    const storedPrice =
      prices[priceKey] ??
      prices[sourceItem.name];

    let valueMovement: number | null = null;

    if (
      movement !== null &&
      storedPrice
    ) {
      const stockUnit =
        canonicalUnit(
          sourceItem.unit
        );

      const priceUnit =
        canonicalUnit(
          storedPrice.unit
        );

      if (
        stockUnit === priceUnit
      ) {
        valueMovement =
          movement *
          storedPrice.price;
      } else if (
        stockUnit === "g" &&
        priceUnit === "kg"
      ) {
        valueMovement =
          (movement / 1000) *
          storedPrice.price;
      } else if (
        stockUnit === "ml" &&
        priceUnit === "L"
      ) {
        valueMovement =
          (movement / 1000) *
          storedPrice.price;
      }
    }

    return {
      name: sourceItem.name,
      category:
        sourceItem.category,
      unit:
        sourceItem.unit,
      opening,
      closing,
      movement,
      percentage,
      price:
        storedPrice?.price ??
        null,
      valueMovement,
    };
  });
}

export default function StockPage() {
  const [tab, setTab] =
    useState<PageTab>("current");

  const [items, setItems] =
    useState<StockItem[]>([]);

  const [search, setSearch] =
    useState("");

  const [
    categoryFilter,
    setCategoryFilter,
  ] = useState("All");

  const [
    lastSaved,
    setLastSaved,
  ] = useState("");

  const [
    selectedHistoryId,
    setSelectedHistoryId,
  ] = useState(
    latestHistoricalStockTake.id
  );

  const [
    ingredientPrices,
    setIngredientPrices,
  ] = useState<
    Record<string, IngredientPrice>
  >({});

  const [
    compareFromId,
    setCompareFromId,
  ] = useState(
    historicalStockTakes[
      Math.max(
        historicalStockTakes.length -
          2,
        0
      )
    ].id
  );

  const [
    compareToId,
    setCompareToId,
  ] = useState(
    latestHistoricalStockTake.id
  );

  useEffect(() => {
    const storedPrices =
      JSON.parse(
        localStorage.getItem(
          "ingredientPrices"
        ) || "{}"
      ) as Record<
        string,
        IngredientPrice
      >;

    setIngredientPrices(
      storedPrices
    );

    const savedDraft =
      localStorage.getItem(
        "currentStockTake"
      );

    if (savedDraft) {
      try {
        const parsed =
          JSON.parse(
            savedDraft
          ) as SavedStockTake;

        setItems(
          parsed.items ?? []
        );

        setLastSaved(
          parsed.createdAt ?? ""
        );

        return;
      } catch (error) {
        console.error(
          "Could not load saved stock count",
          error
        );
      }
    }

    setItems(
      buildCurrentStockItems(
        storedPrices
      )
    );
  }, []);

  const categories =
    useMemo(() => {
      const source =
        tab === "current"
          ? items
          : historicalStockTakes.flatMap(
              (take) =>
                take.items
            );

      return [
        "All",
        ...Array.from(
          new Set(
            source
              .map(
                (item) =>
                  item.category
              )
              .filter(Boolean)
          )
        ).sort(),
      ];
    }, [items, tab]);

  const filteredItems =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      return items.filter(
        (item) => {
          const matchesSearch =
            !query ||
            item.name
              .toLowerCase()
              .includes(query) ||
            item.category
              .toLowerCase()
              .includes(query) ||
            item.storage
              .toLowerCase()
              .includes(query) ||
            item.supplier
              .toLowerCase()
              .includes(query);

          const matchesCategory =
            categoryFilter ===
              "All" ||
            item.category ===
              categoryFilter;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    }, [
      items,
      search,
      categoryFilter,
    ]);

  const selectedHistory =
    useMemo(() => {
      return (
        historicalStockTakes.find(
          (take) =>
            take.id ===
            selectedHistoryId
        ) ??
        latestHistoricalStockTake
      );
    }, [selectedHistoryId]);

  const filteredHistoryItems =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      return selectedHistory.items.filter(
        (item) => {
          const matchesSearch =
            !query ||
            item.name
              .toLowerCase()
              .includes(query) ||
            item.category
              .toLowerCase()
              .includes(query) ||
            item.storage
              .toLowerCase()
              .includes(query) ||
            item.notes
              .toLowerCase()
              .includes(query);

          const matchesCategory =
            categoryFilter ===
              "All" ||
            item.category ===
              categoryFilter;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    }, [
      selectedHistory,
      search,
      categoryFilter,
    ]);

  const totalStockValue =
    useMemo(() => {
      return items.reduce(
        (total, item) =>
          total +
          calculateStockValue(
            item
          ),
        0
      );
    }, [items]);

  const countedCount =
    items.filter(
      (item) =>
        item.quantity !== null
    ).length;

  const pricedCount =
    items.filter(
      (item) =>
        item.price !== null
    ).length;

  const missingPriceCount =
    items.length -
    pricedCount;

  const comparison =
    useMemo(() => {
      return buildComparison(
        compareFromId,
        compareToId,
        ingredientPrices
      );
    }, [
      compareFromId,
      compareToId,
      ingredientPrices,
    ]);

  const filteredComparison =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      return comparison.filter(
        (row) => {
          const matchesSearch =
            !query ||
            row.name
              .toLowerCase()
              .includes(query) ||
            row.category
              .toLowerCase()
              .includes(query);

          const matchesCategory =
            categoryFilter ===
              "All" ||
            row.category ===
              categoryFilter;

          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    }, [
      comparison,
      search,
      categoryFilter,
    ]);

  const biggestIncrease =
    useMemo(() => {
      return [...comparison]
        .filter(
          (row) =>
            row.movement !== null
        )
        .sort(
          (a, b) =>
            (b.movement ?? 0) -
            (a.movement ?? 0)
        )[0];
    }, [comparison]);

  const biggestDecrease =
    useMemo(() => {
      return [...comparison]
        .filter(
          (row) =>
            row.movement !== null
        )
        .sort(
          (a, b) =>
            (a.movement ?? 0) -
            (b.movement ?? 0)
        )[0];
    }, [comparison]);

  const totalValueMovement =
    comparison.reduce(
      (total, row) =>
        total +
        (row.valueMovement ?? 0),
      0
    );

  function updateItem(
    index: number,
    field:
      | "quantity"
      | "unit",
    value: string
  ) {
    setItems((current) =>
      current.map(
        (
          item,
          itemIndex
        ) => {
          if (
            itemIndex !== index
          ) {
            return item;
          }

          if (
            field ===
            "quantity"
          ) {
            return {
              ...item,
              quantity:
                value === ""
                  ? null
                  : Number(
                      value
                    ),
            };
          }

          return {
            ...item,
            unit: value,
          };
        }
      )
    );
  }

  function saveDraft() {
    const now =
      new Date().toISOString();

    const stockTake: SavedStockTake =
      {
        id: "current",
        createdAt: now,
        items,
      };

    localStorage.setItem(
      "currentStockTake",
      JSON.stringify(
        stockTake
      )
    );

    setLastSaved(now);

    alert(
      "Stock count saved."
    );
  }

  function completeStockTake() {
    const now =
      new Date().toISOString();

    const stockTake: SavedStockTake =
      {
        id: `stock-${Date.now()}`,
        createdAt: now,
        items,
      };

    const history =
      JSON.parse(
        localStorage.getItem(
          "stockTakeHistory"
        ) || "[]"
      ) as SavedStockTake[];

    history.unshift(
      stockTake
    );

    localStorage.setItem(
      "stockTakeHistory",
      JSON.stringify(
        history
      )
    );

    localStorage.removeItem(
      "currentStockTake"
    );

    setLastSaved(now);

    alert(
      `Stock take completed. Current priced stock value: ${money(
        totalStockValue
      )}`
    );
  }

  function startFreshCount() {
    const confirmed =
      window.confirm(
        "Start a fresh count using the latest stock list? This clears the current quantities."
      );

    if (!confirmed) return;

    const fresh =
      buildCurrentStockItems(
        ingredientPrices
      ).map((item) => ({
        ...item,
        quantity: null,
      }));

    setItems(fresh);

    localStorage.removeItem(
      "currentStockTake"
    );

    setLastSaved("");
  }

  function restoreLatestCount() {
    setItems(
      buildCurrentStockItems(
        ingredientPrices
      )
    );

    localStorage.removeItem(
      "currentStockTake"
    );

    setLastSaved("");
  }

  function switchTab(
    nextTab: PageTab
  ) {
    setTab(nextTab);
    setSearch("");
    setCategoryFilter("All");
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            A
          </div>

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
            <span className="nav-icon">
              ⌂
            </span>
            Dashboard
          </Link>

          <Link
            className="nav-link"
            href="/invoices"
          >
            <span className="nav-icon">
              ▤
            </span>
            Invoices
          </Link>

          <Link
            className="nav-link"
            href="/ingredients"
          >
            <span className="nav-icon">
              ◫
            </span>
            Ingredients
          </Link>

          <Link
            className="nav-link"
            href="/recipes"
          >
            <span className="nav-icon">
              ◇
            </span>
            Recipes
          </Link>

          <Link
            className="nav-link"
            href="/menu"
          >
            <span className="nav-icon">
              ☰
            </span>
            Menu
          </Link>

          <Link
            className="nav-link nav-link-active"
            href="/stock"
          >
            <span className="nav-icon">
              □
            </span>
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
              Inventory control
            </p>

            <h1>
              Stock counts
            </h1>

            <p className="page-description">
              Count current BOH stock,
              review history and compare
              inventory movement between
              stock takes.
            </p>

            {tab ===
              "current" &&
              lastSaved && (
                <p className="stock-last-saved">
                  Last saved{" "}
                  {formatDateTime(
                    lastSaved
                  )}
                </p>
              )}
          </div>

          {tab ===
            "current" && (
            <div className="stock-header-actions">
              <button
                className="cancel-button"
                type="button"
                onClick={
                  startFreshCount
                }
              >
                New count
              </button>

              <button
                className="cancel-button"
                type="button"
                onClick={
                  saveDraft
                }
              >
                Save draft
              </button>

              <button
                className="primary-button"
                type="button"
                onClick={
                  completeStockTake
                }
              >
                Complete stock take
              </button>
            </div>
          )}
        </header>

        <div className="stock-tabs">
          <button
            className={`stock-tab ${
              tab === "current"
                ? "stock-tab-active"
                : ""
            }`}
            type="button"
            onClick={() =>
              switchTab(
                "current"
              )
            }
          >
            Current count
          </button>

          <button
            className={`stock-tab ${
              tab === "history"
                ? "stock-tab-active"
                : ""
            }`}
            type="button"
            onClick={() =>
              switchTab(
                "history"
              )
            }
          >
            History
            <span>
              {
                historicalStockTakes.length
              }
            </span>
          </button>

          <button
            className={`stock-tab ${
              tab === "compare"
                ? "stock-tab-active"
                : ""
            }`}
            type="button"
            onClick={() =>
              switchTab(
                "compare"
              )
            }
          >
            Compare
          </button>
        </div>

        {tab === "current" && (
          <>
            <section className="stats-grid">
              <article className="stat-card">
                <p className="stat-label">
                  Stock value
                </p>

                <p className="stat-value">
                  {money(
                    totalStockValue
                  )}
                </p>

                <p className="stat-change neutral">
                  Priced lines only
                </p>
              </article>

              <article className="stat-card">
                <p className="stat-label">
                  Counted
                </p>

                <p className="stat-value">
                  {countedCount}
                </p>

                <p className="stat-change neutral">
                  of {items.length} lines
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
                  Linked to invoices
                </p>
              </article>

              <article className="stat-card">
                <p className="stat-label">
                  Missing prices
                </p>

                <p className="stat-value">
                  {missingPriceCount}
                </p>

                <p className="stat-change warning">
                  Costs still needed
                </p>
              </article>
            </section>

            <section className="panel stock-source-banner">
              <div>
                <p className="panel-kicker">
                  Count template
                </p>

                <h2>
                  Based on latest BOH
                  stock take
                </h2>
              </div>

              <button
                className="secondary-inline-button"
                type="button"
                onClick={
                  restoreLatestCount
                }
              >
                Restore latest quantities
              </button>
            </section>

            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="panel-kicker">
                    Current count
                  </p>

                  <h2>
                    Kitchen inventory
                  </h2>
                </div>
              </div>

              <div className="ingredient-toolbar">
                <div className="ingredient-search">
                  <input
                    type="search"
                    placeholder="Search stock..."
                    value={search}
                    onChange={(event) =>
                      setSearch(
                        event.target.value
                      )
                    }
                  />
                </div>

                <div className="ingredient-filter">
                  <select
                    value={
                      categoryFilter
                    }
                    onChange={(event) =>
                      setCategoryFilter(
                        event.target.value
                      )
                    }
                  >
                    {categories.map(
                      (category) => (
                        <option
                          key={category}
                          value={category}
                        >
                          {category}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="table-wrapper">
                <table className="stock-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Storage</th>
                      <th>Item</th>
                      <th>Count</th>
                      <th>Unit</th>
                      <th>Current cost</th>
                      <th>Supplier</th>
                      <th>Value</th>
                      <th>Notes</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredItems.map(
                      (item) => {
                        const originalIndex =
                          items.findIndex(
                            (candidate) =>
                              candidate === item
                          );

                        const value =
                          calculateStockValue(
                            item
                          );

                        return (
                          <tr
                            key={`${item.category}-${item.name}-${originalIndex}`}
                          >
                            <td>
                              <span className="ingredient-category-badge">
                                {item.category}
                              </span>
                            </td>

                            <td>
                              {item.storage || "—"}
                            </td>

                            <td>
                              <strong className="stock-item-name">
                                {item.name}
                              </strong>
                            </td>

                            <td>
                              <input
                                className="stock-count-input"
                                inputMode="decimal"
                                placeholder="0"
                                value={
                                  item.quantity ??
                                  ""
                                }
                                onChange={(event) =>
                                  updateItem(
                                    originalIndex,
                                    "quantity",
                                    event.target.value
                                  )
                                }
                              />
                            </td>

                            <td>
                              <input
                                className="stock-unit-input"
                                value={item.unit}
                                onChange={(event) =>
                                  updateItem(
                                    originalIndex,
                                    "unit",
                                    event.target.value
                                  )
                                }
                              />
                            </td>

                            <td>
                              {item.price !== null ? (
                                <>
                                  <strong>
                                    {money(
                                      item.price
                                    )}
                                  </strong>
                                  <span className="stock-price-unit">
                                    {" "}
                                    /{" "}
                                    {item.priceUnit ||
                                      "unit"}
                                  </span>
                                </>
                              ) : (
                                <span className="stock-missing-price">
                                  No price
                                </span>
                              )}
                            </td>

                            <td>
                              {item.supplier || "—"}
                            </td>

                            <td>
                              {item.quantity !== null &&
                              item.price !== null &&
                              value > 0
                                ? money(value)
                                : "—"}
                            </td>

                            <td className="stock-notes-cell">
                              {item.notes || "—"}
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        {tab === "history" && (
          <>
            <section className="stock-history-cards">
              {[...historicalStockTakes]
                .reverse()
                .map((take) => (
                  <button
                    className={`stock-history-card ${
                      selectedHistoryId === take.id
                        ? "stock-history-card-active"
                        : ""
                    }`}
                    key={take.id}
                    type="button"
                    onClick={() =>
                      setSelectedHistoryId(
                        take.id
                      )
                    }
                  >
                    <span className="stock-history-date">
                      {take.label}
                    </span>

                    <span className="stock-history-lines">
                      {take.items.length} lines
                    </span>

                    <span className="stock-history-view">
                      View stock take →
                    </span>
                  </button>
                ))}
            </section>

            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="panel-kicker">
                    Historic stock take
                  </p>

                  <h2>
                    {selectedHistory.label}
                  </h2>
                </div>
              </div>

              <div className="ingredient-toolbar">
                <div className="ingredient-search">
                  <input
                    type="search"
                    placeholder="Search historic stock..."
                    value={search}
                    onChange={(event) =>
                      setSearch(
                        event.target.value
                      )
                    }
                  />
                </div>
              </div>

              <div className="table-wrapper">
                <table className="stock-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Storage</th>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Unit</th>
                      <th>Notes</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredHistoryItems.map(
                      (item, index) => (
                        <tr
                          key={`${item.name}-${index}`}
                        >
                          <td>
                            {item.category}
                          </td>

                          <td>
                            {item.storage || "—"}
                          </td>

                          <td>
                            <strong>
                              {item.name}
                            </strong>
                          </td>

                          <td>
                            {item.quantity ?? "—"}
                          </td>

                          <td>
                            {item.unit || "—"}
                          </td>

                          <td>
                            {item.notes || "—"}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        {tab === "compare" && (
          <>
            <section className="panel stock-compare-controls">
              <div>
                <p className="panel-kicker">
                  Comparison period
                </p>

                <h2>
                  Compare stock takes
                </h2>
              </div>

              <div className="compare-selects">
                <div className="form-field">
                  <label>From</label>

                  <select
                    value={compareFromId}
                    onChange={(event) =>
                      setCompareFromId(
                        event.target.value
                      )
                    }
                  >
                    {historicalStockTakes.map(
                      (take) => (
                        <option
                          key={take.id}
                          value={take.id}
                        >
                          {take.label}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <div className="compare-arrow">
                  →
                </div>

                <div className="form-field">
                  <label>To</label>

                  <select
                    value={compareToId}
                    onChange={(event) =>
                      setCompareToId(
                        event.target.value
                      )
                    }
                  >
                    {historicalStockTakes.map(
                      (take) => (
                        <option
                          key={take.id}
                          value={take.id}
                        >
                          {take.label}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </section>

            <section className="stats-grid">
              <article className="stat-card">
                <p className="stat-label">
                  Compared items
                </p>

                <p className="stat-value">
                  {comparison.length}
                </p>
              </article>

              <article className="stat-card">
                <p className="stat-label">
                  Biggest increase
                </p>

                <p className="stat-value stock-compare-stat">
                  {biggestIncrease?.name ??
                    "—"}
                </p>

                <p className="stat-change neutral">
                  {biggestIncrease?.movement !==
                  null
                    ? `+${
                        biggestIncrease?.movement ??
                        0
                      } ${
                        biggestIncrease?.unit ??
                        ""
                      }`
                    : "—"}
                </p>
              </article>

              <article className="stat-card">
                <p className="stat-label">
                  Biggest decrease
                </p>

                <p className="stat-value stock-compare-stat">
                  {biggestDecrease?.name ??
                    "—"}
                </p>

                <p className="stat-change warning">
                  {biggestDecrease?.movement !==
                  null
                    ? `${biggestDecrease?.movement ??
                        0} ${
                        biggestDecrease?.unit ??
                        ""
                      }`
                    : "—"}
                </p>
              </article>

              <article className="stat-card">
                <p className="stat-label">
                  Value movement
                </p>

                <p className="stat-value">
                  {money(
                    totalValueMovement
                  )}
                </p>

                <p className="stat-change neutral">
                  Priced matches only
                </p>
              </article>
            </section>

            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="panel-kicker">
                    Stock movement
                  </p>

                  <h2>
                    Item comparison
                  </h2>
                </div>
              </div>

              <div className="ingredient-toolbar">
                <div className="ingredient-search">
                  <input
                    type="search"
                    placeholder="Search comparison..."
                    value={search}
                    onChange={(event) =>
                      setSearch(
                        event.target.value
                      )
                    }
                  />
                </div>

                <div className="ingredient-filter">
                  <select
                    value={
                      categoryFilter
                    }
                    onChange={(event) =>
                      setCategoryFilter(
                        event.target.value
                      )
                    }
                  >
                    {categories.map(
                      (category) => (
                        <option
                          key={category}
                          value={category}
                        >
                          {category}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div className="table-wrapper">
                <table className="stock-table compare-table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Category</th>
                      <th>Opening</th>
                      <th>Closing</th>
                      <th>Movement</th>
                      <th>% change</th>
                      <th>Value movement</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredComparison.map(
                      (row) => (
                        <tr key={row.name}>
                          <td>
                            <strong>
                              {row.name}
                            </strong>
                          </td>

                          <td>
                            {row.category}
                          </td>

                          <td>
                            {row.opening ??
                              "—"}{" "}
                            {row.unit}
                          </td>

                          <td>
                            {row.closing ??
                              "—"}{" "}
                            {row.unit}
                          </td>

                          <td>
                            {row.movement !==
                            null ? (
                              <span
                                className={
                                  row.movement >
                                  0
                                    ? "movement-positive"
                                    : row.movement <
                                      0
                                    ? "movement-negative"
                                    : "movement-neutral"
                                }
                              >
                                {row.movement >
                                0
                                  ? "+"
                                  : ""}
                                {row.movement.toFixed(
                                  2
                                )}{" "}
                                {row.unit}
                              </span>
                            ) : (
                              "—"
                            )}
                          </td>

                          <td>
                            {row.percentage !==
                            null
                              ? `${row.percentage.toFixed(
                                  1
                                )}%`
                              : "—"}
                          </td>

                          <td>
                            {row.valueMovement !==
                            null
                              ? money(
                                  row.valueMovement
                                )
                              : "—"}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </section>
    </main>
  );
}