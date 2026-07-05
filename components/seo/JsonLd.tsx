type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Rendrer ærlig JSON-LD. Escaper «<» for å hindre script-injeksjon. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
