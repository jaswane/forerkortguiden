import Link from "next/link";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <div className="container page prose">
      <h1>Siden finnes ikke</h1>
      <p className="lead">
        Adressen du fulgte finnes ikke – kanskje er siden flyttet, eller lenken er feil.
      </p>
      <p>Dette leter folk oftest etter:</p>
      <ul>
        <li>
          <Link href={routes.klasser}>Førerkortklasser</Link>
        </li>
        <li>
          <Link href={routes.taForerkort}>Slik tar du førerkort</Link>
        </li>
        <li>
          <Link href={routes.tilhenger}>Bil og tilhenger</Link>
        </li>
        <li>
          <Link href={routes.verktoy}>Verktøy</Link>
        </li>
      </ul>
      <p>
        <Link className="btn btn--primary" href="/">
          Til forsiden
        </Link>
      </p>
    </div>
  );
}
