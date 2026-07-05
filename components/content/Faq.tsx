import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, type FaqItem } from "@/lib/schema";

type FaqProps = {
  items: FaqItem[];
  title?: string;
  /** FAQPage-schema legges kun til når spørsmålene er sidens reelle FAQ. */
  withSchema?: boolean;
};

export function Faq({ items, title = "Vanlige spørsmål", withSchema = true }: FaqProps) {
  if (items.length === 0) return null;
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="faq">
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <div className="faq__answer">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
      {withSchema ? <JsonLd data={faqSchema(items)} /> : null}
    </section>
  );
}
