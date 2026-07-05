import type { ReactNode } from "react";

export type Step = {
  title: string;
  description: ReactNode;
};

export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="steps">
      {steps.map((step) => (
        <li key={step.title}>
          <h3>{step.title}</h3>
          {typeof step.description === "string" ? <p>{step.description}</p> : step.description}
        </li>
      ))}
    </ol>
  );
}
