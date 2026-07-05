import Link from "next/link";
import { INDEPENDENCE_NOTE, OWNER_NAME, OWNER_URL, SITE_NAME } from "@/lib/constants";
import { footerNav } from "@/data/navigation";
import { routes } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <h2>{SITE_NAME}</h2>
            <p>{INDEPENDENCE_NOTE}</p>
            <p>
              Kontroller alltid oppdatert informasjon hos{" "}
              <a href="https://www.vegvesen.no/forerkort/" rel="noopener">
                Statens vegvesen
              </a>{" "}
              før du tar beslutninger.
            </p>
          </div>
          {footerNav.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2>{group.heading}</h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="site-footer__bottom">
          <p>
            Et prosjekt fra{" "}
            <a href={OWNER_URL} rel="noopener">
              {OWNER_NAME}
            </a>
          </p>
          <p>
            <Link href={routes.kontakt}>Kontakt oss</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
