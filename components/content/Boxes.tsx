import type { ReactNode } from "react";

/** «Kort forklart»-boks: det direkte svaret, øverst på siden. */
export function ShortAnswer({ children }: { children: ReactNode }) {
  return (
    <div className="box box--short">
      <p className="box__title">Kort forklart</p>
      {children}
    </div>
  );
}

export function InfoBox({
  title = "Godt å vite",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="box box--info">
      <p className="box__title">{title}</p>
      {children}
    </div>
  );
}

export function WarningBox({
  title = "Viktig forbehold",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="box box--warn">
      <p className="box__title">{title}</p>
      {children}
    </div>
  );
}
