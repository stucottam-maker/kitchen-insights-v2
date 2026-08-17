import Link from "next/link";

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

export default function Sidebar({
  active,
}: SidebarProps) {
  function navClass(
    page: SidebarPage
  ) {
    return active === page
      ? "nav-link nav-link-active"
      : "nav-link";
  }

  return (
    <aside className="sidebar">
      <div className="brand">
  <div className="sidebar-brand-mark">
    K
  </div>

  <div className="sidebar-brand-copy">
    <strong>Kitchen Insights</strong>
    <span>Cost & purchasing control</span>
  </div>
</div>

      <nav
        className="sidebar-nav"
        aria-label="Main navigation"
      >
        <Link
          className={navClass(
            "dashboard"
          )}
          href="/"
        >
          <span className="nav-icon">
            ⌂
          </span>
          Dashboard
        </Link>

        <Link
          className={navClass(
            "orders"
          )}
          href="/orders"
        >
          <span className="nav-icon">
            +
          </span>
          Orders
        </Link>

        <Link
          className={navClass(
            "invoices"
          )}
          href="/invoices"
        >
          <span className="nav-icon">
            ▤
          </span>
          Invoices
        </Link>

        <Link
          className={navClass(
            "ingredients"
          )}
          href="/ingredients"
        >
          <span className="nav-icon">
            ◫
          </span>
          Ingredients
        </Link>

        <Link
          className={navClass(
            "recipes"
          )}
          href="/recipes"
        >
          <span className="nav-icon">
            ◇
          </span>
          Recipes
        </Link>

        <Link
          className={navClass(
            "menu"
          )}
          href="/menu"
        >
          <span className="nav-icon">
            ☰
          </span>
          Menu
        </Link>

        <Link
          className={navClass(
            "stock"
          )}
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
  );
}
