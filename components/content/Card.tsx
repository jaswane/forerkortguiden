import Link from "next/link";

export type CardItem = {
  title: string;
  href: string;
  description: string;
  meta?: string;
};

/** Klikkbart kort til hub-sider. Hele kortet er klikkflate via CSS. */
export function CardGrid({
  items,
  columns = 3,
}: {
  items: CardItem[];
  columns?: 2 | 3;
}) {
  return (
    <ul className={columns === 2 ? "card-grid card-grid--two" : "card-grid"}>
      {items.map((item) => (
        <li className="card" key={item.href}>
          {item.meta ? <span className="card__meta">{item.meta}</span> : null}
          <h3>
            <Link href={item.href}>{item.title}</Link>
          </h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
