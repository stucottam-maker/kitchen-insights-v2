import type { ReactNode } from "react";

import WorkspaceSectionGate from "../components/WorkspaceSectionGate";

export default function MenuLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <WorkspaceSectionGate
      active="menu"
      title="Menu"
      description="Track selling prices, recipe costs and food cost for the selected restaurant."
      emptyTitle="No menu items yet"
      emptyDescription="BEAUFORT HOUSE has its own clean menu. Add its dishes here when you are ready; Azteca menu items stay in the Azteca workspace."
    >
      {children}
    </WorkspaceSectionGate>
  );
}
