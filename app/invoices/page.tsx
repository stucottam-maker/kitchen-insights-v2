"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";

type InvoiceLineItem = {
  product: string;
  quantity: number | null;
  pack: string;
  unitPrice: number | null;
  total: number | null;
  status?: string;
  ingredientMatch?: string;
};

type ApprovedInvoice = {
  id: string;
  supplier: string;
  invoiceNumber: string;
  invoiceDate: string;
  subtotal: number | null;
  vat: number | null;
  total: number | null;
  lineItems: InvoiceLineItem[];
  status: "Approved";
  approvedAt: string;
};

function money(value: number | null | undefined) {
  if (
    value === null ||
    value === undefined ||
    Number.isNaN(value)
  ) {
    return "—";
  }

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function formatDate(value: string) {
  if (!value) {
    return "—";
  }

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsed);
}

export default function InvoicesPage() {
  const router = useRouter();

  const [invoices, setInvoices] = useState<ApprovedInvoice[]>([]);
  const [search, setSearch] = useState("");
  const [supplierFilter, setSupplierFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("approvedInvoices") || "[]"
      ) as ApprovedInvoice[];

      setInvoices(Array.isArray(saved) ? saved : []);
    } catch {
      setInvoices([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const suppliers = useMemo(() => {
    const unique = Array.from(
      new Set(
        invoices
          .map((invoice) => invoice.supplier)
          .filter(Boolean)
      )
    );

    return unique.sort((a, b) =>
      a.localeCompare(b)
    );
  }, [invoices]);

  const filteredInvoices = useMemo(() => {
    const query = search.trim().toLowerCase();

    return invoices.filter((invoice) => {
      const matchesSupplier =
        supplierFilter === "All" ||
        invoice.supplier === supplierFilter;

      const matchesSearch =
        !query ||
        invoice.supplier
          .toLowerCase()
          .includes(query) ||
        invoice.invoiceNumber
          .toLowerCase()
          .includes(query);

      return matchesSupplier && matchesSearch;
    });
  }, [invoices, search, supplierFilter]);

  const totalSpend = useMemo(() => {
    return invoices.reduce(
      (sum, invoice) =>
        sum + (invoice.total ?? 0),
      0
    );
  }, [invoices]);

  const thisMonthSpend = useMemo(() => {
    const now = new Date();

    return invoices.reduce((sum, invoice) => {
      if (!invoice.invoiceDate) {
        return sum;
      }

      const date = new Date(invoice.invoiceDate);

      if (
        Number.isNaN(date.getTime()) ||
        date.getMonth() !== now.getMonth() ||
        date.getFullYear() !== now.getFullYear()
      ) {
        return sum;
      }

      return sum + (invoice.total ?? 0);
    }, 0);
  }, [invoices]);

  const approvedCount = invoices.length;

  const supplierCount = suppliers.length;

  function removeInvoice(id: string) {
    const confirmed = window.confirm(
      "Remove this invoice from invoice history?"
    );

    if (!confirmed) {
      return;
    }

    const nextInvoices = invoices.filter(
      (invoice) => invoice.id !== id
    );

    setInvoices(nextInvoices);

    localStorage.setItem(
      "approvedInvoices",
      JSON.stringify(nextInvoices)
    );
  }

  return (
    <main className="app-shell">
      <Sidebar active="invoices" />

      <section className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">
              Purchasing
            </p>

            <h1>
              Invoices
            </h1>

            <p className="page-description">
              Upload supplier invoices, review extracted data and keep a
              live history of purchasing costs.
            </p>
          </div>

          <button
            type="button"
            className="primary-button"
            onClick={() =>
              router.push("/invoices/upload")
            }
          >
            + Upload invoice
          </button>
        </header>

        <section
          className="stats-grid"
          style={{
            marginBottom: "24px",
          }}
        >
          <article className="stat-card">
            <span>
              Approved invoices
            </span>

            <strong>
              {approvedCount}
            </strong>
          </article>

          <article className="stat-card">
            <span>
              Total recorded spend
            </span>

            <strong>
              {money(totalSpend)}
            </strong>
          </article>

          <article className="stat-card">
            <span>
              This month
            </span>

            <strong>
              {money(thisMonthSpend)}
            </strong>
          </article>

          <article className="stat-card">
            <span>
              Active suppliers
            </span>

            <strong>
              {supplierCount}
            </strong>
          </article>
        </section>

        <section className="panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">
                Invoice history
              </p>

              <h2>
                Approved invoices
              </h2>
            </div>

            <button
              type="button"
              className="secondary-inline-button"
              onClick={() =>
                router.push("/invoices/upload")
              }
            >
              Upload new
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              marginBottom: "18px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="search"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search supplier or invoice number..."
              style={{
                flex: "1 1 280px",
                minWidth: "220px",
              }}
            />

            <select
              value={supplierFilter}
              onChange={(event) =>
                setSupplierFilter(event.target.value)
              }
              style={{
                minWidth: "210px",
              }}
            >
              <option value="All">
                All suppliers
              </option>

              {suppliers.map((supplier) => (
                <option
                  key={supplier}
                  value={supplier}
                >
                  {supplier}
                </option>
              ))}
            </select>
          </div>

          {loading ? (
            <div className="empty-table-message">
              Loading invoices...
            </div>
          ) : filteredInvoices.length === 0 ? (
            <div
              style={{
                padding: "56px 20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "34px",
                  marginBottom: "12px",
                }}
              >
                ▤
              </div>

              <h3
                style={{
                  marginBottom: "8px",
                }}
              >
                {invoices.length === 0
                  ? "No approved invoices yet"
                  : "No invoices match your filters"}
              </h3>

              <p
                style={{
                  maxWidth: "500px",
                  margin:
                    "0 auto 18px auto",
                  opacity: 0.7,
                }}
              >
                {invoices.length === 0
                  ? "Upload your first supplier invoice. Once approved, it will appear here and update ingredient prices automatically."
                  : "Try changing the supplier filter or clearing your search."}
              </p>

              {invoices.length === 0 && (
                <button
                  type="button"
                  className="primary-button"
                  onClick={() =>
                    router.push("/invoices/upload")
                  }
                >
                  Upload first invoice
                </button>
              )}
            </div>
          ) : (
            <div
              style={{
                overflowX: "auto",
              }}
            >
              <table className="ingredients-table">
                <thead>
                  <tr>
                    <th>
                      Supplier
                    </th>

                    <th>
                      Invoice
                    </th>

                    <th>
                      Date
                    </th>

                    <th>
                      Lines
                    </th>

                    <th>
                      Total
                    </th>

                    <th>
                      Status
                    </th>

                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {filteredInvoices.map((invoice) => (
                    <tr key={invoice.id}>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "3px",
                          }}
                        >
                          <strong>
                            {invoice.supplier || "Unknown supplier"}
                          </strong>

                          <span
                            style={{
                              fontSize: "12px",
                              opacity: 0.58,
                            }}
                          >
                            Approved{" "}
                            {formatDate(invoice.approvedAt)}
                          </span>
                        </div>
                      </td>

                      <td>
                        {invoice.invoiceNumber || "—"}
                      </td>

                      <td>
                        {formatDate(invoice.invoiceDate)}
                      </td>

                      <td>
                        {invoice.lineItems?.length ?? 0}
                      </td>

                      <td>
                        <strong>
                          {money(invoice.total)}
                        </strong>
                      </td>

                      <td>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "5px 9px",
                            borderRadius: "999px",
                            background: "#edf4ef",
                            color: "#245e48",
                            fontSize: "12px",
                            fontWeight: 700,
                          }}
                        >
                          ✓ Approved
                        </span>
                      </td>

                      <td>
                        <button
                          type="button"
                          className="cancel-button"
                          onClick={() =>
                            removeInvoice(invoice.id)
                          }
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section
          className="panel"
          style={{
            marginTop: "24px",
            marginBottom: "60px",
          }}
        >
          <div className="panel-header">
            <div>
              <p className="panel-kicker">
                Invoice workflow
              </p>

              <h2>
                One connected flow
              </h2>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(4, minmax(0, 1fr))",
              gap: "14px",
            }}
          >
            <div
              style={{
                padding: "16px",
                border: "1px solid #e4dfd6",
                borderRadius: "12px",
              }}
            >
              <strong>
                1. Upload
              </strong>

              <p
                style={{
                  margin: "6px 0 0",
                  opacity: 0.68,
                  fontSize: "13px",
                }}
              >
                Photograph or upload the supplier invoice.
              </p>
            </div>

            <div
              style={{
                padding: "16px",
                border: "1px solid #e4dfd6",
                borderRadius: "12px",
              }}
            >
              <strong>
                2. Extract
              </strong>

              <p
                style={{
                  margin: "6px 0 0",
                  opacity: 0.68,
                  fontSize: "13px",
                }}
              >
                AI reads products, quantities and prices.
              </p>
            </div>

            <div
              style={{
                padding: "16px",
                border: "1px solid #e4dfd6",
                borderRadius: "12px",
              }}
            >
              <strong>
                3. Review
              </strong>

              <p
                style={{
                  margin: "6px 0 0",
                  opacity: 0.68,
                  fontSize: "13px",
                }}
              >
                Match supplier products to your master ingredients.
              </p>
            </div>

            <div
              style={{
                padding: "16px",
                border: "1px solid #e4dfd6",
                borderRadius: "12px",
              }}
            >
              <strong>
                4. Update
              </strong>

              <p
                style={{
                  margin: "6px 0 0",
                  opacity: 0.68,
                  fontSize: "13px",
                }}
              >
                Ingredient prices and cost history update automatically.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
