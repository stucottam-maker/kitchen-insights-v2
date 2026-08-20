import type { ReactNode } from "react";

import WorkspaceSectionGate from "../components/WorkspaceSectionGate";

export default function RecipesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <WorkspaceSectionGate
      active="recipes"
      title="Recipes"
      description="Prep recipes and menu recipes for the selected restaurant."
      emptyTitle="No recipes yet"
      emptyDescription="BEAUFORT HOUSE has its own clean recipe library. Azteca recipes remain available only inside the Azteca workspace."
    >
      {children}
    </WorkspaceSectionGate>
  );
}
