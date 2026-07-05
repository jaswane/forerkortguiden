"use client";

export function PrintButton({ label = "Skriv ut" }: { label?: string }) {
  return (
    <button
      type="button"
      className="btn btn--secondary no-print"
      onClick={() => window.print()}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M4 6V2h8v4M4 12H2V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5h-2m-8-1h8v5H4v-5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </button>
  );
}
