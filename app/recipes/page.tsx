import Link from "next/link";
import { recipes, recipeSlug, Recipe } from "../data/recipes";

function getRecipeStatus(recipe: Recipe) {
  if (recipe.yieldAmount == null) {
    return "Yield needed";
  }

  if (
    recipe.ingredients.some(
      (ingredient) =>
        ingredient.quantity === null ||
        ingredient.quantity === undefined
    )
  ) {
    return "Recipe incomplete";
  }

  return "Ready to cost";
}

export default function RecipesPage() {
  const prepRecipes = recipes.filter(
    (recipe) => recipe.type === "Prep"
  );

  const menuRecipes = recipes.filter(
    (recipe) => recipe.type === "Menu"
  );

  function renderRecipe(recipe: Recipe) {
    const status = getRecipeStatus(recipe);

    return (
      <Link
        className="recipe-card recipe-card-link"
        href={`/recipes/${recipeSlug(recipe.name)}`}
        key={recipe.name}
      >
        <div className="recipe-card-top">
          <div>
            <p className="recipe-name">
              {recipe.name}
            </p>

            <p className="muted-text">
              {recipe.linkedMenuItem
                ? `Used in ${recipe.linkedMenuItem}`
                : recipe.type === "Menu"
                ? "Menu item"
                : "Prep recipe"}
            </p>
          </div>

          <span
            className={`status-badge ${
              status === "Ready to cost"
                ? "status-approved"
                : "status-review"
            }`}
          >
            {status}
          </span>
        </div>

        <div className="recipe-meta">
          <span>
            {recipe.ingredients.length} ingredients
          </span>

          <span>
            Yield:{" "}
            {recipe.yieldAmount
              ? `${recipe.yieldAmount} ${
                  recipe.yieldUnit ?? ""
                }`
              : "needed"}
          </span>
        </div>

        <div className="recipe-ingredients-preview">
          {recipe.ingredients
            .slice(0, 4)
            .map((ingredient, index) => (
              <span
                key={`${recipe.name}-${ingredient.name}-${index}`}
              >
                {ingredient.name}
              </span>
            ))}
        </div>
      </Link>
    );
  }

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
            className="nav-link"
            href="/ingredients"
          >
            <span className="nav-icon">◫</span>
            Ingredients
          </Link>

          <Link
            className="nav-link nav-link-active"
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
              Recipe costing
            </p>

            <h1>Recipes</h1>

            <p className="page-description">
              Prep recipes and menu recipes used to
              calculate live dish costs.
            </p>
          </div>

          <button
            className="primary-button"
            type="button"
          >
            + Add recipe
          </button>
        </header>

        <section className="stats-grid">
          <article className="stat-card">
            <p className="stat-label">
              Total recipes
            </p>

            <p className="stat-value">
              {recipes.length}
            </p>

            <p className="stat-change neutral">
              Prep and menu recipes
            </p>
          </article>

          <article className="stat-card">
            <p className="stat-label">
              Prep recipes
            </p>

            <p className="stat-value">
              {prepRecipes.length}
            </p>

            <p className="stat-change neutral">
              Sauces, marinades and batches
            </p>
          </article>

          <article className="stat-card">
            <p className="stat-label">
              Menu recipes
            </p>

            <p className="stat-value">
              {menuRecipes.length}
            </p>

            <p className="stat-change neutral">
              Linked to menu dishes
            </p>
          </article>

          <article className="stat-card">
            <p className="stat-label">
              Costed recipes
            </p>

            <p className="stat-value">
              0
            </p>

            <p className="stat-change warning">
              Ingredient prices needed
            </p>
          </article>
        </section>

        <section className="recipe-section-grid">
          <article className="panel recipe-list-panel">
            <div className="panel-header">
              <div>
                <p className="panel-kicker">
                  Batch recipes
                </p>

                <h2>Prep recipes</h2>
              </div>

              <span className="menu-section-count">
                {prepRecipes.length}
              </span>
            </div>

            <div className="recipe-card-list">
              {prepRecipes.map(renderRecipe)}
            </div>
          </article>

          <article className="panel recipe-list-panel">
            <div className="panel-header">
              <div>
                <p className="panel-kicker">
                  Menu dishes
                </p>

                <h2>Menu recipes</h2>
              </div>

              <span className="menu-section-count">
                {menuRecipes.length}
              </span>
            </div>

            <div className="recipe-card-list">
              {menuRecipes.map(renderRecipe)}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}