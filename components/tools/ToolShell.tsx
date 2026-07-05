import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { routes } from "@/lib/routes";

type ToolShellProps = {
  title: string;
  lead: string;
  toolName: string;
  toolPath: string;
  children: ReactNode;
};

/** Felles ramme rundt verktøysidene: brødsmuler, tittel og ingress. */
export function ToolShell({ title, lead, toolName, toolPath, children }: ToolShellProps) {
  return (
    <div className="container page">
      <Breadcrumbs
        crumbs={[
          { name: "Verktøy", path: routes.verktoy },
          { name: toolName, path: toolPath },
        ]}
      />
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      {children}
    </div>
  );
}
