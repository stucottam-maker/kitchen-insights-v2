"use client";
import Link from "next/link";

type MenuItem = {
  name: string;
  price: number;
  description: string;
  dietary?: string;
  recipeCost?: number | null;
  foodCostPercent?: number | null;
  gpPercent?: number | null;
  status: "Recipe needed" | "Costed";
};

type MenuSection = {
  name: string;
  items: MenuItem[];
};

const menuSections: MenuSection[] = [
  {
    name: "Para Picar",
    items: [
      {
        name: "Sea Salt Edamame",
        price: 5.5,
        description: "Sesame oil",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Spicy Edamame",
        price: 5.5,
        description: "Chilli garlic, pepita oil",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Guacamole",
        price: 12,
        description: "Edamame, herbs, blue totopos",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Black Bean Dip",
        price: 8,
        description: "Pepita chilli oil, crispy tortilla",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Pork Belly Chicharrons",
        price: 15,
        description: "Camote, ahi amarillo mayo",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "King Prawn Tempura",
        price: 16,
        description: "Chipotle mayo, lime",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
    ],
  },

  {
    name: "Sashimi and Ceviche",
    items: [
      {
        name: "Trout Tiradito",
        price: 18,
        description:
          "Smoked tiger's milk, pickled courgette, avocado",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Classico Ceviche",
        price: 18,
        description:
          "Red onions, camote, cherry tomato, coriander",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Tuna Tostada",
        price: 22,
        description:
          "Bluefin tuna, sesame matcha, radish, pepita seeds",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
    ],
  },

  {
    name: "Tacos",
    items: [
      {
        name: "Wild Mushroom Quesadilla",
        price: 13,
        description:
          "Queso Oaxaca, peach habanero · individual",
        dietary: "D · V",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Brisket & Cheek Birria",
        price: 13,
        description:
          "Onions, requeson cheese, dipping stock · 2 x 12cm Masafina tortillas",
        dietary: "D",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Crispy Fish Baja",
        price: 14,
        description:
          "Chipotle mayo, slaw, coriander, smoked coal oil · 2 x 12cm Masafina tortillas",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Coconut King Prawn",
        price: 13,
        description:
          "Cactus pico de gallo, chilli jam, black eye beans, crispy onions · 2 x 12cm Masafina tortillas",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Chicken Pastor",
        price: 12,
        description:
          "Grilled, spicy pineapple · 2 x 12cm Masafina tortillas",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Smoked Aubergine",
        price: 10,
        description:
          "Butternut squash, vegan feta, pickled onion · 2 x 12cm Masafina heritage blue corn tortillas",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Pork Carnitas",
        price: 29,
        description:
          "All the trimmings, salsa verde · serves 2 · 5 x 10cm Masafina tortillas",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
    ],
  },

  {
    name: "Salsa",
    items: [
      {
        name: "Salsa El Diablo",
        price: 2,
        description: "Hot",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Salsa Platter of 5 Salsas",
        price: 11,
        description: "Blue totopos",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Roasted Salsa Verde",
        price: 2,
        description: "",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Cindy's Peach Habanero",
        price: 2,
        description: "Hot",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Salsa Negra",
        price: 2,
        description: "Mild",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Jalapeño Salsa",
        price: 2,
        description: "Sweet / mild",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "House Hot Sauce",
        price: 2,
        description: "Hot",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Chimichurri Verde",
        price: 2,
        description: "Mild",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
    ],
  },

  {
    name: "Sharing Dishes",
    items: [
      {
        name: "Miso Black Cod",
        price: 40,
        description:
          "220g North Pacific black cod, kimchi cabbage, yuzu miso sauce",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Half Herb Fed Chicken",
        price: 26,
        description:
          "Miso, poblano marinade, caramelised onions",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Ribeye Steak 300g",
        price: 45,
        description:
          "Chimichurri verde, chipotle salt, 10cm Masafina tortillas",
        dietary: "G",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Longhorn Grass Fed Beef Short Rib",
        price: 38,
        description:
          "Chocolate and pepita mole, 10cm Masafina tortillas",
        dietary: "N · G",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Lamb Cutlets",
        price: 38,
        description:
          "Citrus herb marinade, chipotle mayo, homemade kimchi",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "28 Day Dry Aged Irish Tomahawk Ribeye 1.2kg",
        price: 90,
        description: "Chimichurri verde, comte cubes",
        dietary: "G · D",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
    ],
  },

  {
    name: "Sides",
    items: [
      {
        name: "Black Beans",
        price: 6,
        description:
          "Smoked pork hock, spring onion crema",
        dietary: "D",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Grilled Corn on the Cob",
        price: 6,
        description:
          "Chipotle, brown butter, ahi amarillo mayo, coriander",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Charred Hispi Cabbage",
        price: 7,
        description: "Miso, pickled jalapeño",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Crushed Pink Fir Potatoes",
        price: 7,
        description:
          "Morita chilli oil, ahi amarillo mayo",
        dietary: "V · VG",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Comte Cubes",
        price: 6,
        description:
          "Made with chickpeas and shallots · 4 pieces",
        dietary: "D · V",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
    ],
  },

  {
    name: "Desserts",
    items: [
      {
        name: "Cinnamon Churros",
        price: 8,
        description: "Tres leches dip",
        dietary: "D · G",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Cuatro Mochis",
        price: 12,
        description:
          "Coconut, tropical, strawberry cheesecake",
        dietary: "D · G",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
      {
        name: "Ice Cream & Sorbet Trio",
        price: 10,
        description:
          "Coconut, dulce de leche, vanilla, chocolate",
        recipeCost: null,
        foodCostPercent: null,
        gpPercent: null,
        status: "Recipe needed",
      },
    ],
  },
];

function formatMoney(value: number | null | undefined) {
  if (value === null || value === undefined) {
    return "—";
  }

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

export default function MenuPage() {
  const totalItems = menuSections.reduce(
    (total, section) => total + section.items.length,
    0
  );

  const costedItems = menuSections.reduce(
    (total, section) =>
      total +
      section.items.filter((item) => item.status === "Costed").length,
    0
  );

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">A</div>

          <div>
            <p className="brand-name">Azteca Insights</p>
            <p className="brand-subtitle">Kitchen cost control</p>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          <Link className="nav-link" href="/">
            <span className="nav-icon">⌂</span>
            Dashboard
          </Link>

          <Link className="nav-link" href="/invoices">
            <span className="nav-icon">▤</span>
            Invoices
          </Link>

          <Link className="nav-link" href="/ingredients">
            <span className="nav-icon">◫</span>
            Ingredients
          </Link>

          <Link className="nav-link" href="/recipes">
            <span className="nav-icon">◇</span>
            Recipes
          </Link>

          <Link className="nav-link nav-link-active" href="/menu">
            <span className="nav-icon">☰</span>
            Menu
          </Link>

          <Link className="nav-link" href="/stock">
            <span className="nav-icon">□</span>
            Stock counts
          </Link>
        </nav>

        <div className="sidebar-footer">
          <div className="restaurant-card">
            <div className="restaurant-avatar">AZ</div>

            <div>
              <p className="restaurant-name">Azteca</p>
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
            <p className="eyebrow">Menu costing</p>
            <h1>Menu</h1>

            <p className="page-description">
              Track selling prices, recipe costs and food cost
              across the current Azteca menu.
            </p>
          </div>

          <Link className="primary-button" href="/recipes">
            + Create recipe
          </Link>
        </header>

        <section className="stats-grid">
          <article className="stat-card">
            <p className="stat-label">Menu items</p>
            <p className="stat-value">{totalItems}</p>
            <p className="stat-change neutral">
              Current live menu
            </p>
          </article>

          <article className="stat-card">
            <p className="stat-label">Recipes costed</p>
            <p className="stat-value">{costedItems}</p>
            <p className="stat-change warning">
              {totalItems - costedItems} still need recipes
            </p>
          </article>

          <article className="stat-card">
            <p className="stat-label">Average food cost</p>
            <p className="stat-value">—</p>
            <p className="stat-change neutral">
              Available once recipes are costed
            </p>
          </article>

          <article className="stat-card">
            <p className="stat-label">Above target</p>
            <p className="stat-value">—</p>
            <p className="stat-change neutral">
              Target alerts coming next
            </p>
          </article>
        </section>

        <section className="menu-sections">
          {menuSections.map((section) => (
            <article className="panel menu-section" key={section.name}>
              <div className="panel-header">
                <div>
                  <p className="panel-kicker">Menu section</p>
                  <h2>{section.name}</h2>
                </div>

                <span className="menu-section-count">
                  {section.items.length} items
                </span>
              </div>

              <div className="table-wrapper">
                <table className="menu-table">
                  <thead>
                    <tr>
                      <th>Dish</th>
                      <th>Selling price</th>
                      <th>Recipe cost</th>
                      <th>Food cost</th>
                      <th>GP</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {section.items.map((item) => (
                      <tr key={item.name}>
                        <td className="menu-dish-cell">
                          <div>
                            <strong>{item.name}</strong>

                            {item.dietary && (
                              <span className="menu-dietary">
                                {item.dietary}
                              </span>
                            )}
                          </div>

                          <p>{item.description}</p>
                        </td>

                        <td>
                          <strong>{formatMoney(item.price)}</strong>
                        </td>

                        <td>{formatMoney(item.recipeCost)}</td>

                        <td>
                          {item.foodCostPercent !== null &&
                          item.foodCostPercent !== undefined
                            ? `${item.foodCostPercent.toFixed(1)}%`
                            : "—"}
                        </td>

                        <td>
                          {item.gpPercent !== null &&
                          item.gpPercent !== undefined
                            ? `${item.gpPercent.toFixed(1)}%`
                            : "—"}
                        </td>

                        <td>
                          <span
                            className={`status-badge ${
                              item.status === "Costed"
                                ? "status-approved"
                                : "status-review"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}