"use client";

import { suppliers } from "../../data/suppliers";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";


type ExtractedInvoice = {
  supplier: string;
  invoiceNumber: string;
  invoiceDate: string;
  subtotal: number | null;
  vat: number | null;
  total: number | null;
  lineItems: {
    product: string;
    quantity: number | null;
    pack: string;
    unitPrice: number | null;
    total: number | null;
    status?: string;
    ingredientMatch?: string;
  }[];
};

export default function InvoiceUploadPage() {
  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [supplier, setSupplier] = useState("");
  const [supplierSearch, setSupplierSearch] = useState("");
  const [supplierPickerOpen, setSupplierPickerOpen] = useState(false);

  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [invoiceTotal, setInvoiceTotal] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const supplierOptions = useMemo(() => {
    return Object.values(suppliers).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, []);

  const filteredSuppliers = useMemo(() => {
    const query = supplierSearch.trim().toLowerCase();

    if (!query) {
      return supplierOptions;
    }

    return supplierOptions.filter((supplierItem) =>
      supplierItem.name.toLowerCase().includes(query)
    );
  }, [supplierOptions, supplierSearch]);

  function getInitials(name: string) {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setError("");

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  }

  function clearFile() {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setSelectedFile(null);
    setPreviewUrl("");
    setError("");
  }

  function selectSupplier(name: string) {
    setSupplier(name);
    setSupplierPickerOpen(false);
    setSupplierSearch("");
  }

  async function extractInvoice() {
    if (!selectedFile) {
      setError("Choose an invoice image first.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();

      formData.append("file", selectedFile);

      if (supplier) {
        formData.append("supplier", supplier);
      }

      const response = await fetch("/api/invoices/extract", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Invoice extraction failed."
        );
      }

      const extracted: ExtractedInvoice =
        result?.invoice ??
        result?.extraction ??
        result?.data ??
        result;

      const finalInvoice: ExtractedInvoice = {
        supplier:
          supplier ||
          extracted?.supplier ||
          "",

        invoiceNumber:
          invoiceNumber ||
          extracted?.invoiceNumber ||
          "",

        invoiceDate:
          invoiceDate ||
          extracted?.invoiceDate ||
          "",

        subtotal:
          extracted?.subtotal ?? null,

        vat:
          extracted?.vat ?? null,

        total:
          invoiceTotal !== ""
            ? Number(invoiceTotal)
            : extracted?.total ?? null,

        lineItems:
          Array.isArray(extracted?.lineItems)
            ? extracted.lineItems
            : [],
      };

      sessionStorage.setItem(
        "invoiceExtraction",
        JSON.stringify(finalInvoice)
      );

      sessionStorage.setItem(
        "invoiceFileName",
        selectedFile.name
      );

      router.push("/invoices/review");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while extracting the invoice."
      );
    } finally {
      setLoading(false);
    }
  }

  function continueWithoutExtraction() {
    if (!supplier) {
      setError("Select a supplier first.");
      return;
    }

    const manualInvoice: ExtractedInvoice = {
      supplier,
      invoiceNumber,
      invoiceDate,
      subtotal: null,
      vat: null,
      total:
        invoiceTotal !== ""
          ? Number(invoiceTotal)
          : null,
      lineItems: [],
    };

    sessionStorage.setItem(
      "invoiceExtraction",
      JSON.stringify(manualInvoice)
    );

    router.push("/invoices/review");
  }

  const selectedSupplier =
    supplier && suppliers[supplier]
      ? suppliers[supplier]
      : null;

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
              Upload invoice
            </h1>

            <p className="page-description">
              Upload a supplier invoice and let the system extract the
              products, quantities and prices.
            </p>
          </div>
        </header>

        <section className="panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">
                Invoice image
              </p>

              <h2>
                Upload invoice
              </h2>
            </div>
          </div>

          {!selectedFile ? (
            <label
              style={{
                display: "flex",
                minHeight: "220px",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "12px",
                border: "1px dashed #d6d2ca",
                borderRadius: "14px",
                cursor: "pointer",
                padding: "30px",
              }}
            >
              <strong>
                Choose invoice image
              </strong>

              <span>
                JPEG, PNG or WEBP
              </span>

              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
                style={{
                  display: "none",
                }}
              />
            </label>
          ) : (
            <div>
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Invoice preview"
                  style={{
                    width: "100%",
                    maxHeight: "520px",
                    objectFit: "contain",
                    borderRadius: "12px",
                    background: "#f4f1eb",
                  }}
                />
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: "14px",
                }}
              >
                <div>
                  <strong>
                    {selectedFile.name}
                  </strong>

                  <div
                    style={{
                      fontSize: "13px",
                      opacity: 0.65,
                      marginTop: "4px",
                    }}
                  >
                    {(
                      selectedFile.size /
                      1024 /
                      1024
                    ).toFixed(2)}{" "}
                    MB
                  </div>
                </div>

                <button
                  type="button"
                  className="cancel-button"
                  onClick={clearFile}
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </section>

        <section
          className="panel"
          style={{
            marginTop: "24px",
          }}
        >
          <div className="panel-header">
            <div>
              <p className="panel-kicker">
                Invoice details
              </p>

              <h2>
                Supplier information
              </h2>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(2, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            <div className="invoice-supplier-picker">
              <span className="invoice-field-label">
                Supplier
              </span>

              <button
                type="button"
                className="invoice-supplier-trigger"
                onClick={() =>
                  setSupplierPickerOpen(
                    (current) => !current
                  )
                }
              >
                <div className="invoice-supplier-trigger-left">
                  {selectedSupplier ? (
                    <>
                      <div className="invoice-supplier-logo-wrap">
                        {selectedSupplier.logo ? (
                          <img
                            src={selectedSupplier.logo}
                            alt=""
                            className="invoice-supplier-logo"
                          />
                        ) : (
                          <span className="invoice-supplier-initials">
                            {getInitials(
                              selectedSupplier.name
                            )}
                          </span>
                        )}
                      </div>

                      <strong>
                        {selectedSupplier.name}
                      </strong>
                    </>
                  ) : (
                    <span className="invoice-supplier-placeholder">
                      Select supplier
                    </span>
                  )}
                </div>

                <span className="invoice-supplier-chevron">
                  {supplierPickerOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {supplierPickerOpen && (
                <div className="invoice-supplier-menu">
                  <div className="invoice-supplier-search">
                    <input
                      type="search"
                      value={supplierSearch}
                      onChange={(event) =>
                        setSupplierSearch(
                          event.target.value
                        )
                      }
                      placeholder="Search suppliers..."
                      autoFocus
                    />
                  </div>

                  <div className="invoice-supplier-options">
                    {filteredSuppliers.length ===
                    0 ? (
                      <div className="invoice-supplier-empty">
                        No suppliers found
                      </div>
                    ) : (
                      filteredSuppliers.map(
                        (supplierItem) => (
                          <button
                            type="button"
                            key={
                              supplierItem.name
                            }
                            className={`invoice-supplier-option ${
                              supplier ===
                              supplierItem.name
                                ? "invoice-supplier-option-active"
                                : ""
                            }`}
                            onClick={() =>
                              selectSupplier(
                                supplierItem.name
                              )
                            }
                          >
                            <div className="invoice-supplier-logo-wrap">
                              {supplierItem.logo ? (
                                <img
                                  src={
                                    supplierItem.logo
                                  }
                                  alt=""
                                  className="invoice-supplier-logo"
                                />
                              ) : (
                                <span className="invoice-supplier-initials">
                                  {getInitials(
                                    supplierItem.name
                                  )}
                                </span>
                              )}
                            </div>

                            <div className="invoice-supplier-option-copy">
                              <strong>
                                {supplierItem.name}
                              </strong>

                              {supplierItem.orderMethod && (
                                <span>
                                  {
                                    supplierItem.orderMethod
                                  }

                                  {supplierItem.email
                                    ? ` · ${supplierItem.email}`
                                    : ""}
                                </span>
                              )}
                            </div>

                            {supplier ===
                              supplierItem.name && (
                              <span className="invoice-supplier-check">
                                ✓
                              </span>
                            )}
                          </button>
                        )
                      )
                    )}
                  </div>
                </div>
              )}
            </div>

            <label>
              <span>
                Invoice number
              </span>

              <input
                value={invoiceNumber}
                onChange={(event) =>
                  setInvoiceNumber(
                    event.target.value
                  )
                }
                placeholder="Will be extracted automatically"
              />
            </label>

            <label>
              <span>
                Invoice date
              </span>

              <input
                type="date"
                value={invoiceDate}
                onChange={(event) =>
                  setInvoiceDate(
                    event.target.value
                  )
                }
              />
            </label>

            <label>
              <span>
                Invoice total
              </span>

              <div
                style={{
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "14px",
                    top: "50%",
                    transform:
                      "translateY(-50%)",
                    opacity: 0.55,
                  }}
                >
                  £
                </span>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={invoiceTotal}
                  onChange={(event) =>
                    setInvoiceTotal(
                      event.target.value
                    )
                  }
                  placeholder="0.00"
                  style={{
                    paddingLeft: "30px",
                  }}
                />
              </div>
            </label>
          </div>
        </section>

        {error && (
          <section
            className="panel"
            style={{
              marginTop: "18px",
            }}
          >
            <div
              style={{
                color: "#a43e32",
                fontWeight: 600,
              }}
            >
              {error}
            </div>
          </section>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "24px",
            marginBottom: "60px",
          }}
        >
          <button
            type="button"
            className="cancel-button"
            onClick={() =>
              router.push("/invoices")
            }
          >
            Cancel
          </button>

          {!selectedFile && (
            <button
              type="button"
              className="secondary-inline-button"
              onClick={
                continueWithoutExtraction
              }
            >
              Enter manually
            </button>
          )}

          <button
            type="button"
            className="primary-button"
            onClick={extractInvoice}
            disabled={
              !selectedFile ||
              loading
            }
          >
            {loading
              ? "Extracting invoice..."
              : "Continue to review →"}
          </button>
        </div>
      </section>
    </main>
  );
}
