import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const all: Crumb[] = [{ name: "Forside", path: "/" }, ...crumbs];
  return (
    <nav className="breadcrumbs" aria-label="Brødsmulesti">
      <ol>
        {all.map((crumb, i) => (
          <li key={crumb.path}>
            {i < all.length - 1 ? (
              <Link href={crumb.path}>{crumb.name}</Link>
            ) : (
              <span aria-current="page">{crumb.name}</span>
            )}
          </li>
        ))}
      </ol>
      <JsonLd data={breadcrumbSchema(all)} />
    </nav>
  );
}
