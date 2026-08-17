"use client";

import { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import { supplierCatalogue } from "../data/supplierCatalogue";
import { suppliers as supplierDirectory } from "../data/suppliers";

type IngredientPrice = {
  price: number;
  unit: string;
  supplier: string;
  product: string;
  updatedAt: string;
};

type StockItem = {
  name: string;
  category: string;
  quantity: number | null;
  unit: string;
  price: number | null;
  priceUnit: string;
  supplier: string;
};

type OrderLine = {
  id: string;
  ingredient: string;
  supplier: string;
  supplierProduct: string;
  stockQty: number;
  stockUnit: string;
  orderQty: number;
  orderUnit: string;
  unitPrice: number | null;
  suggestedQty: number;
};

type PurchaseOrder = {
  id: string;
  supplier: string;
  createdAt: string;
  status: "Sent";
  lines: OrderLine[];
  estimatedTotal: number;
};

type OrderStep = "start" | "order" | "review";

function money(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function supplierInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function findStockItem(
  currentStock: StockItem[],
  ingredient: string
) {
  const target = ingredient.toLowerCase().trim();

  return (
    currentStock.find(
      (item) =>
        item.name.toLowerCase().trim() === target
    ) ?? null
  );
}

function buildOrderLines(
  ingredientPrices: Record<string, IngredientPrice>,
  currentStock: StockItem[]
): OrderLine[] {
  /*
   * Build one line PER supplier product.
   *
   * This is important because:
   * Stonebass can exist at Fin & Flounder AND James Knight,
   * limes can exist at Albion AND Oui Chef, etc.
   *
   * We do not want to collapse those into a single ingredient row.
   */

  const catalogueLines: OrderLine[] =
    supplierCatalogue.map((catalogueItem, index) => {
      const livePrice =
        ingredientPrices[catalogueItem.ingredient];

      const stock = findStockItem(
        currentStock,
        catalogueItem.ingredient
      );

      /*
       * Only use the live invoice price if it belongs
       * to this exact supplier.
       */
      const matchingLivePrice =
        livePrice &&
        livePrice.supplier === catalogueItem.supplier
          ? livePrice
          : null;

      const orderUnit =
        matchingLivePrice?.unit ||
        catalogueItem.unit ||
        stock?.unit ||
        "kg";

      const stockQty = Number(
        stock?.quantity ?? 0
      );

      const stockUnit =
        stock?.unit || orderUnit;

      const unitPrice =
        matchingLivePrice?.price ??
        catalogueItem.fallbackPrice ??
        null;

      const suggestedQty =
        stockQty > 0
          ? round(stockQty * 0.5)
          : 0;

      return {
        id: `catalogue-${index}-${catalogueItem.supplier}-${catalogueItem.ingredient}`,
        ingredient: catalogueItem.ingredient,
        supplier: catalogueItem.supplier,
        supplierProduct:
          matchingLivePrice?.product ||
          catalogueItem.supplierProduct,
        stockQty,
        stockUnit,
        orderQty: 0,
        orderUnit,
        unitPrice,
        suggestedQty,
      };
    });

  /*
   * Add live invoice products that do not yet exist
   * in the static supplier catalogue.
   */
  const catalogueKeys = new Set(
    supplierCatalogue.map(
      (item) =>
        `${item.supplier}::${item.ingredient}`.toLowerCase()
    )
  );

  const invoiceOnlyLines: OrderLine[] =
    Object.entries(ingredientPrices)
      .filter(([ingredient, price]) => {
        const key =
          `${price.supplier}::${ingredient}`.toLowerCase();

        return !catalogueKeys.has(key);
      })
      .map(([ingredient, price], index) => {
        const stock = findStockItem(
          currentStock,
          ingredient
        );

        const stockQty = Number(
          stock?.quantity ?? 0
        );

        const orderUnit =
          price.unit ||
          stock?.unit ||
          "kg";

        return {
          id: `invoice-${index}-${price.supplier}-${ingredient}`,
          ingredient,
          supplier: price.supplier,
          supplierProduct:
            price.product || ingredient,
          stockQty,
          stockUnit:
            stock?.unit || orderUnit,
          orderQty: 0,
          orderUnit,
          unitPrice: price.price,
          suggestedQty:
            stockQty > 0
              ? round(stockQty * 0.5)
              : 0,
        };
      });

  return [
    ...catalogueLines,
    ...invoiceOnlyLines,
  ];
}

function SupplierLogo({
  supplier,
  size = "normal",
}: {
  supplier: string;
  size?: "normal" | "small";
}) {
  const logo =
    supplierDirectory[supplier]?.logo;

  return (
    <div
      className={`supplier-choice-avatar ${
        size === "small"
          ? "supplier-choice-avatar-small"
          : ""
      }`}
    >
      {logo ? (
        <img
          src={logo}
          alt=""
          className="supplier-logo"
        />
      ) : (
        <span>
          {supplierInitials(supplier)}
        </span>
      )}
    </div>
  );
}

export default function OrdersPage() {
  const [step, setStep] =
    useState<OrderStep>("start");

  const [
    selectedSupplier,
    setSelectedSupplier,
  ] = useState("");

  const [lines, setLines] =
    useState<OrderLine[]>([]);

  const [
    purchaseOrders,
    setPurchaseOrders,
  ] = useState<PurchaseOrder[]>([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    const ingredientPrices =
      JSON.parse(
        localStorage.getItem(
          "ingredientPrices"
        ) || "{}"
      ) as Record<
        string,
        IngredientPrice
      >;

    const stockTake =
      JSON.parse(
        localStorage.getItem(
          "currentStockTake"
        ) || '{"items":[]}'
      ) as {
        items?: StockItem[];
      };

    setLines(
      buildOrderLines(
        ingredientPrices,
        stockTake.items ?? []
      )
    );

    const storedOrders =
      JSON.parse(
        localStorage.getItem(
          "purchaseOrders"
        ) || "[]"
      ) as PurchaseOrder[];

    setPurchaseOrders(storedOrders);
  }, []);

  const supplierNames =
    useMemo(() => {
      return Array.from(
        new Set(
          lines
            .map((line) => line.supplier)
            .filter(
              (supplier) =>
                supplier &&
                supplier !== "Unassigned"
            )
        )
      ).sort();
    }, [lines]);

  const supplierLines =
    useMemo(() => {
      const query =
        search.trim().toLowerCase();

      return lines.filter((line) => {
        if (
          line.supplier !==
          selectedSupplier
        ) {
          return false;
        }

        if (!query) {
          return true;
        }

        return (
          line.ingredient
            .toLowerCase()
            .includes(query) ||
          line.supplierProduct
            .toLowerCase()
            .includes(query)
        );
      });
    }, [
      lines,
      selectedSupplier,
      search,
    ]);

  const selectedOrderLines =
    useMemo(() => {
      return lines.filter(
        (line) =>
          line.supplier ===
            selectedSupplier &&
          line.orderQty > 0
      );
    }, [
      lines,
      selectedSupplier,
    ]);

  const estimatedTotal =
    selectedOrderLines.reduce(
      (total, line) => {
        if (line.unitPrice === null) {
          return total;
        }

        return (
          total +
          line.orderQty *
            line.unitPrice
        );
      },
      0
    );

  function updateOrderQty(
    id: string,
    quantity: number
  ) {
    setLines((current) =>
      current.map((line) =>
        line.id === id
          ? {
              ...line,
              orderQty: Math.max(
                round(quantity),
                0
              ),
            }
          : line
      )
    );
  }

  function changeQty(
    line: OrderLine,
    amount: number
  ) {
    updateOrderQty(
      line.id,
      line.orderQty + amount
    );
  }

  function applySuggested(
    line: OrderLine
  ) {
    updateOrderQty(
      line.id,
      line.suggestedQty
    );
  }

  function useAllSuggested() {
    setLines((current) =>
      current.map((line) => {
        if (
          line.supplier !==
          selectedSupplier
        ) {
          return line;
        }

        return {
          ...line,
          orderQty:
            line.suggestedQty,
        };
      })
    );
  }

  function clearSupplierOrder() {
    setLines((current) =>
      current.map((line) =>
        line.supplier ===
        selectedSupplier
          ? {
              ...line,
              orderQty: 0,
            }
          : line
      )
    );
  }

  function chooseSupplier(
    supplier: string
  ) {
    setSelectedSupplier(supplier);
    setSearch("");
    setStep("order");
  }

  function sendOrder() {
    if (
      selectedOrderLines.length === 0
    ) {
      alert(
        "Add at least one item to the order first."
      );
      return;
    }

    const order: PurchaseOrder = {
      id: `PO-${Date.now()}`,
      supplier:
        selectedSupplier,
      createdAt:
        new Date().toISOString(),
      status: "Sent",
      lines:
        selectedOrderLines,
      estimatedTotal,
    };

    const nextOrders = [
      order,
      ...purchaseOrders,
    ];

    localStorage.setItem(
      "purchaseOrders",
      JSON.stringify(nextOrders)
    );

    setPurchaseOrders(nextOrders);

    clearSupplierOrder();

    setStep("start");

    alert(
      `${selectedSupplier} order saved as sent.`
    );
  }

  const recentOrders =
    [...purchaseOrders]
      .sort(
        (a, b) =>
          new Date(
            b.createdAt
          ).getTime() -
          new Date(
            a.createdAt
          ).getTime()
      )
      .slice(0, 6);

  return (
    <main className="app-shell">
      <Sidebar active="orders" />

      <section className="main-content">
        {step === "start" && (
          <>
            <header className="topbar">
              <div>
                <p className="eyebrow">
                  Purchasing
                </p>

                <h1>Orders</h1>

                <p className="page-description">
                  Choose a supplier and build an
                  order in a few seconds.
                </p>
              </div>
            </header>

            <section className="panel quick-order-start">
              <div className="panel-header">
                <div>
                  <p className="panel-kicker">
                    New order
                  </p>

                  <h2>
                    Who are you ordering from?
                  </h2>
                </div>
              </div>

              <div className="supplier-choice-grid">
                {supplierNames.map(
                  (supplier) => {
                    const count =
                      lines.filter(
                        (line) =>
                          line.supplier ===
                          supplier
                      ).length;

                    return (
                      <button
                        type="button"
                        className="supplier-choice-card"
                        key={supplier}
                        onClick={() =>
                          chooseSupplier(
                            supplier
                          )
                        }
                      >
                        <SupplierLogo
                          supplier={supplier}
                        />

                        <div className="supplier-choice-copy">
                          <strong>
                            {supplier}
                          </strong>

                          <span>
                            {count}{" "}
                            {count === 1
                              ? "product"
                              : "products"}
                          </span>
                        </div>

                        <span className="supplier-choice-arrow">
                          →
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </section>

            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="panel-kicker">
                    Recent orders
                  </p>

                  <h2>
                    Latest purchasing
                  </h2>
                </div>
              </div>

              <div className="quick-order-history">
                {recentOrders.length ===
                0 ? (
                  <div className="empty-table-message">
                    No orders sent yet.
                  </div>
                ) : (
                  recentOrders.map(
                    (order) => (
                      <article
                        className="quick-order-history-row"
                        key={order.id}
                      >
                        <div className="quick-order-history-supplier">
                          <SupplierLogo
                            supplier={
                              order.supplier
                            }
                            size="small"
                          />

                          <div>
                            <strong>
                              {
                                order.supplier
                              }
                            </strong>

                            <span>
                              {formatDate(
                                order.createdAt
                              )}
                            </span>
                          </div>
                        </div>

                        <span>
                          {
                            order.lines
                              .length
                          }{" "}
                          items
                        </span>

                        <strong>
                          {money(
                            order.estimatedTotal
                          )}
                        </strong>

                        <span className="status-badge status-approved">
                          Sent
                        </span>
                      </article>
                    )
                  )
                )}
              </div>
            </section>
          </>
        )}

        {step === "order" && (
          <>
            <header className="quick-order-header">
              <div>
                <button
                  className="quick-order-back"
                  type="button"
                  onClick={() =>
                    setStep("start")
                  }
                >
                  ← Orders
                </button>

                <div className="quick-order-supplier-title">
                  <SupplierLogo
                    supplier={
                      selectedSupplier
                    }
                  />

                  <div>
                    <p className="eyebrow">
                      New order
                    </p>

                    <h1>
                      {selectedSupplier}
                    </h1>

                    <p className="page-description">
                      Enter what you want
                      to order.
                    </p>
                  </div>
                </div>
              </div>

              <div className="quick-order-header-total">
                <span>
                  Estimated order
                </span>

                <strong>
                  {money(
                    estimatedTotal
                  )}
                </strong>

                <span>
                  {
                    selectedOrderLines.length
                  }{" "}
                  items
                </span>
              </div>
            </header>

            <section className="quick-order-toolbar">
              <div className="ingredient-search">
                <input
                  type="search"
                  placeholder="Search products..."
                  value={search}
                  onChange={(event) =>
                    setSearch(
                      event.target.value
                    )
                  }
                />
              </div>

              <button
                className="cancel-button"
                type="button"
                onClick={
                  clearSupplierOrder
                }
              >
                Clear
              </button>

              <button
                className="secondary-inline-button"
                type="button"
                onClick={
                  useAllSuggested
                }
              >
                Use suggested
              </button>
            </section>

            <section className="panel quick-order-panel">
              <div className="quick-order-column-headings">
                <span>Product</span>
                <span>In stock</span>
                <span>Order</span>
              </div>

              <div className="quick-order-lines">
                {supplierLines.map(
                  (line) => (
                    <article
                      className={`quick-order-line ${
                        line.orderQty > 0
                          ? "quick-order-line-active"
                          : ""
                      }`}
                      key={line.id}
                    >
                      <div className="quick-order-product">
                        <strong>
                          {line.ingredient}
                        </strong>

                        {line.supplierProduct && (
                          <span>
                            {
                              line.supplierProduct
                            }
                          </span>
                        )}

                        {line.suggestedQty >
                          0 && (
                          <button
                            type="button"
                            className="quick-suggestion"
                            onClick={() =>
                              applySuggested(
                                line
                              )
                            }
                          >
                            Suggested{" "}
                            {
                              line.suggestedQty
                            }{" "}
                            {
                              line.orderUnit
                            }
                          </button>
                        )}
                      </div>

                      <div className="quick-order-stock">
                        <strong>
                          {
                            line.stockQty
                          }
                        </strong>

                        <span>
                          {
                            line.stockUnit
                          }
                        </span>
                      </div>

                      <div className="quick-order-quantity">
                        <button
                          type="button"
                          onClick={() =>
                            changeQty(
                              line,
                              -1
                            )
                          }
                        >
                          −
                        </button>

                        <input
                          inputMode="decimal"
                          value={
                            line.orderQty
                          }
                          onChange={(
                            event
                          ) =>
                            updateOrderQty(
                              line.id,
                              Number(
                                event
                                  .target
                                  .value ||
                                  0
                              )
                            )
                          }
                        />

                        <button
                          type="button"
                          onClick={() =>
                            changeQty(
                              line,
                              1
                            )
                          }
                        >
                          +
                        </button>

                        <span>
                          {
                            line.orderUnit
                          }
                        </span>
                      </div>
                    </article>
                  )
                )}
              </div>
            </section>

            <div className="quick-order-footer">
              <div>
                <span>
                  {
                    selectedOrderLines.length
                  }{" "}
                  items
                </span>

                <strong>
                  {money(
                    estimatedTotal
                  )}
                </strong>
              </div>

              <button
                type="button"
                className="primary-button quick-review-button"
                disabled={
                  selectedOrderLines.length ===
                  0
                }
                onClick={() =>
                  setStep("review")
                }
              >
                Review order →
              </button>
            </div>
          </>
        )}

        {step === "review" && (
          <>
            <header className="quick-order-header">
              <div>
                <button
                  className="quick-order-back"
                  type="button"
                  onClick={() =>
                    setStep("order")
                  }
                >
                  ← Edit order
                </button>

                <div className="quick-order-supplier-title">
                  <SupplierLogo
                    supplier={
                      selectedSupplier
                    }
                  />

                  <div>
                    <p className="eyebrow">
                      Review
                    </p>

                    <h1>
                      {selectedSupplier}
                    </h1>

                    <p className="page-description">
                      Check the order
                      before marking it
                      as sent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="quick-order-header-total">
                <span>
                  Estimated total
                </span>

                <strong>
                  {money(
                    estimatedTotal
                  )}
                </strong>

                <span>
                  {
                    selectedOrderLines.length
                  }{" "}
                  items
                </span>
              </div>
            </header>

            <section className="panel">
              <div className="panel-header">
                <div>
                  <p className="panel-kicker">
                    Purchase order
                  </p>

                  <h2>
                    Order summary
                  </h2>
                </div>
              </div>

              <div className="quick-review-list">
                {selectedOrderLines.map(
                  (line) => (
                    <article
                      className="quick-review-row"
                      key={line.id}
                    >
                      <div>
                        <strong>
                          {line.ingredient}
                        </strong>

                        <span>
                          {
                            line.supplierProduct
                          }
                        </span>
                      </div>

                      <div className="quick-review-qty">
                        <strong>
                          {
                            line.orderQty
                          }{" "}
                          {
                            line.orderUnit
                          }
                        </strong>
                      </div>

                      <div className="quick-review-cost">
                        {line.unitPrice !==
                        null ? (
                          <>
                            <span>
                              {money(
                                line.unitPrice
                              )}
                              /
                              {
                                line.orderUnit
                              }
                            </span>

                            <strong>
                              {money(
                                line.orderQty *
                                  line.unitPrice
                              )}
                            </strong>
                          </>
                        ) : (
                          <span>
                            Price
                            unavailable
                          </span>
                        )}
                      </div>
                    </article>
                  )
                )}
              </div>
            </section>

            <div className="quick-order-footer">
              <div>
                <span>
                  Estimated total
                </span>

                <strong>
                  {money(
                    estimatedTotal
                  )}
                </strong>
              </div>

              <button
                type="button"
                className="primary-button quick-review-button"
                onClick={sendOrder}
              >
                Mark as sent
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
