"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import {
  recipes,
  recipeSlug,
  Recipe,
  RecipeIngredient,
} from "../../data/recipes";

type CostedIngredient = RecipeIngredient & {
  costPerBaseUnit: string;
  baseUnit: string;
};

function money(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

export default function RecipeDetailPage() {
  const pathname = usePathname();

  const slug =
    pathname.split("/").filter(Boolean).pop() ?? "";

  const originalRecipe = recipes.find(
    (item) => recipeSlug(item.name) === slug
  );

  const [recipe, setRecipe] =
    useState<Recipe | null>(null);

  const [ingredients, setIngredients] =
    useState<CostedIngredient[]>([]);

  useEffect(() => {
    if (!originalRecipe) return;

    const stored = localStorage.getItem(
      `recipe:${slug}`
    );

    if (stored) {
      try {
        const parsed = JSON.parse(stored);

        setRecipe(parsed.recipe);
        setIngredients(parsed.ingredients);

        return;
      } catch (error) {
        console.error(
          "Could not load saved recipe",
          error
        );
      }
    }

    setRecipe(originalRecipe);

    setIngredients(
      originalRecipe.ingredients.map(
        (ingredient) => ({
          ...ingredient,

          costPerBaseUnit: "",

          baseUnit:
            ingredient.unit === "g"
              ? "kg"
              : ingredient.unit === "ml"
              ? "L"
              : ingredient.unit === "pieces"
              ? "each"
              : ingredient.unit,
        })
      )
    );
  }, [slug, originalRecipe]);

  const ingredientCosts = useMemo(() => {
    return ingredients.map((ingredient) => {
      const quantity = Number(
        ingredient.quantity ?? 0
      );

      const unitCost = Number(
        ingredient.costPerBaseUnit || 0
      );

      let cost = 0;

      if (
        ingredient.unit === "g" &&
        ingredient.baseUnit === "kg"
      ) {
        cost =
          (quantity / 1000) *
          unitCost;
      } else if (
        ingredient.unit === "ml" &&
        ingredient.baseUnit === "L"
      ) {
        cost =
          (quantity / 1000) *
          unitCost;
      } else if (
        ingredient.unit === "pieces" &&
        ingredient.baseUnit === "each"
      ) {
        cost =
          quantity *
          unitCost;
      } else if (
        ingredient.unit === "kg" &&
        ingredient.baseUnit === "kg"
      ) {
        cost =
          quantity *
          unitCost;
      } else if (
        ingredient.unit === "L" &&
        ingredient.baseUnit === "L"
      ) {
        cost =
          quantity *
          unitCost;
      } else {
        cost =
          quantity *
          unitCost;
      }

      return cost;
    });
  }, [ingredients]);

  const batchCost =
    ingredientCosts.reduce(
      (total, cost) => total + cost,
      0
    );

  const yieldAmount = Number(
    recipe?.yieldAmount ?? 0
  );

  const costPerYieldUnit =
    yieldAmount > 0
      ? batchCost / yieldAmount
      : 0;

  function updateIngredient(
    index: number,
    field: keyof CostedIngredient,
    value: string
  ) {
    setIngredients((current) =>
      current.map(
        (
          ingredient,
          ingredientIndex
        ) =>
          ingredientIndex === index
            ? {
                ...ingredient,

                [field]:
                  field === "quantity"
                    ? value === ""
                      ? null
                      : Number(value)
                    : value,
              }
            : ingredient
      )
    );
  }

  function addIngredient() {
    setIngredients((current) => [
      ...current,
      {
        name: "",
        quantity: null,
        unit: "g",
        costPerBaseUnit: "",
        baseUnit: "kg",
      },
    ]);
  }

  function removeIngredient(
    index: number
  ) {
    setIngredients((current) =>
      current.filter(
        (_, itemIndex) =>
          itemIndex !== index
      )
    );
  }

  function saveRecipe() {
    if (!recipe) return;

    localStorage.setItem(
      `recipe:${slug}`,
      JSON.stringify({
        recipe,
        ingredients,
      })
    );

    alert("Recipe saved locally.");
  }

  if (!originalRecipe || !recipe) {
    return (
      <main className="main-content">
        <h1>Recipe not found</h1>

        <Link
          className="back-link"
          href="/recipes"
        >
          ← Back to recipes
        </Link>
      </main>
    );
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
            className="nav-link nav-link-active"
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
            className="nav-link"
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
        <header className="recipe-detail-header">
          <div>
            <Link
              className="back-link"
              href="/recipes"
            >
              ← Back to recipes
            </Link>

            <p className="eyebrow">
              {recipe.type === "Prep"
                ? "Prep recipe"
                : "Menu recipe"}
            </p>

            <input
              className="recipe-title-input"
              value={recipe.name}
              onChange={(event) =>
                setRecipe({
                  ...recipe,
                  name: event.target.value,
                })
              }
            />

            {recipe.linkedMenuItem && (
              <p className="page-description">
                Linked to menu item:{" "}
                {recipe.linkedMenuItem}
              </p>
            )}
          </div>

          <button
            className="primary-button"
            type="button"
            onClick={saveRecipe}
          >
            Save recipe
          </button>
        </header>

        <section className="stats-grid">
          <article className="stat-card">
            <p className="stat-label">
              Batch cost
            </p>

            <p className="stat-value">
              {money(batchCost)}
            </p>

            <p className="stat-change neutral">
              Based on entered prices
            </p>
          </article>

          <article className="stat-card">
            <p className="stat-label">
              Yield
            </p>

            <div className="recipe-stat-edit">
              <input
                value={
                  recipe.yieldAmount ?? ""
                }
                inputMode="decimal"
                placeholder="Amount"
                onChange={(event) =>
                  setRecipe({
                    ...recipe,

                    yieldAmount:
                      event.target.value === ""
                        ? null
                        : Number(
                            event.target.value
                          ),
                  })
                }
              />

              <input
                value={
                  recipe.yieldUnit ?? ""
                }
                placeholder="Unit"
                onChange={(event) =>
                  setRecipe({
                    ...recipe,
                    yieldUnit:
                      event.target.value,
                  })
                }
              />
            </div>
          </article>

          <article className="stat-card">
            <p className="stat-label">
              Cost per yield unit
            </p>

            <p className="stat-value">
              {yieldAmount > 0
                ? money(
                    costPerYieldUnit
                  )
                : "—"}
            </p>

            <p className="stat-change neutral">
              Per{" "}
              {recipe.yieldUnit ||
                "unit"}
            </p>
          </article>

          <article className="stat-card">
            <p className="stat-label">
              Ingredients
            </p>

            <p className="stat-value">
              {ingredients.length}
            </p>

            <p className="stat-change neutral">
              Recipe lines
            </p>
          </article>
        </section>

        <section className="panel recipe-editor-panel">
          <div className="panel-header">
            <div>
              <p className="panel-kicker">
                Costing
              </p>

              <h2>Ingredients</h2>
            </div>

            <button
              className="secondary-inline-button"
              type="button"
              onClick={addIngredient}
            >
              + Add ingredient
            </button>
          </div>

          <div className="table-wrapper">
            <table className="recipe-cost-table">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Qty</th>
                  <th>Recipe unit</th>
                  <th>Current cost</th>
                  <th>Cost basis</th>
                  <th>Recipe cost</th>
                  <th />
                </tr>
              </thead>

              <tbody>
                {ingredients.map(
                  (ingredient, index) => (
                    <tr
                      key={`${index}-${ingredient.name}`}
                    >
                      <td>
                        <input
                          className="recipe-table-name"
                          value={
                            ingredient.name
                          }
                          onChange={(
                            event
                          ) =>
                            updateIngredient(
                              index,
                              "name",
                              event.target
                                .value
                            )
                          }
                        />
                      </td>

                      <td>
                        <input
                          className="recipe-table-small"
                          value={
                            ingredient.quantity ??
                            ""
                          }
                          inputMode="decimal"
                          onChange={(
                            event
                          ) =>
                            updateIngredient(
                              index,
                              "quantity",
                              event.target
                                .value
                            )
                          }
                        />
                      </td>

                      <td>
                        <select
                          className="recipe-table-select"
                          value={
                            ingredient.unit
                          }
                          onChange={(
                            event
                          ) =>
                            updateIngredient(
                              index,
                              "unit",
                              event.target
                                .value
                            )
                          }
                        >
                          <option value="g">
                            g
                          </option>

                          <option value="kg">
                            kg
                          </option>

                          <option value="ml">
                            ml
                          </option>

                          <option value="L">
                            L
                          </option>

                          <option value="pieces">
                            pieces
                          </option>

                          <option value="heads">
                            heads
                          </option>

                          <option value="tbsp">
                            tbsp
                          </option>

                          <option value="portion">
                            portion
                          </option>
                        </select>
                      </td>

                      <td>
                        <div className="table-money-input">
                          <span>£</span>

                          <input
                            value={
                              ingredient.costPerBaseUnit
                            }
                            inputMode="decimal"
                            placeholder="0.00"
                            onChange={(
                              event
                            ) =>
                              updateIngredient(
                                index,
                                "costPerBaseUnit",
                                event.target
                                  .value
                              )
                            }
                          />
                        </div>
                      </td>

                      <td>
                        <select
                          className="recipe-table-select"
                          value={
                            ingredient.baseUnit
                          }
                          onChange={(
                            event
                          ) =>
                            updateIngredient(
                              index,
                              "baseUnit",
                              event.target
                                .value
                            )
                          }
                        >
                          <option value="kg">
                            per kg
                          </option>

                          <option value="L">
                            per litre
                          </option>

                          <option value="each">
                            each
                          </option>

                          <option value="g">
                            per g
                          </option>

                          <option value="ml">
                            per ml
                          </option>

                          <option value="heads">
                            per head
                          </option>

                          <option value="tbsp">
                            per tbsp
                          </option>
                        </select>
                      </td>

                      <td>
                        <strong>
                          {money(
                            ingredientCosts[
                              index
                            ]
                          )}
                        </strong>
                      </td>

                      <td>
                        <button
                          className="remove-recipe-line"
                          type="button"
                          onClick={() =>
                            removeIngredient(
                              index
                            )
                          }
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel recipe-notes-panel">
          <p className="panel-kicker">
            Method / notes
          </p>

          <h2>Recipe notes</h2>

          <textarea
            value={recipe.notes ?? ""}
            placeholder="Add preparation notes..."
            onChange={(event) =>
              setRecipe({
                ...recipe,
                notes: event.target.value,
              })
            }
          />
        </section>
      </section>
    </main>
  );
}