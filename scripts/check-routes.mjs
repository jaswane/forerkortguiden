/**
 * Røyktest for ruter: sjekker at alle URL-er i sitemap svarer 200 og ikke
 * rendrer 404-siden, og at alle obligatoriske MVP-ruter finnes i sitemap.
 *
 * Bruk: node scripts/check-routes.mjs [baseUrl]   (standard http://localhost:3000)
 */

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
// 404-siden gjenkjennes på rendret H1, ikke ren tekstsøk: Next.js legger
// not-found-grensens payload inn i script-data på alle sider.
const NOT_FOUND_H1 = /<h1[^>]*>\s*Siden finnes ikke/;

const requiredRoutes = [
  "/",
  "/forerkortklasser",
  "/forerkortklasser/klasse-b",
  "/forerkortklasser/klasse-b96",
  "/forerkortklasser/klasse-be",
  "/ta-forerkort",
  "/trafikalt-grunnkurs",
  "/ovelseskjoring",
  "/teoriprove",
  "/oppkjoring",
  "/kostnad",
  "/tilhenger",
  "/verktoy",
  "/guider",
  "/kilder-og-metode",
  "/om",
  "/kontakt",
  "/personvern",
];

async function main() {
  const sitemapRes = await fetch(`${base}/sitemap.xml`);
  if (!sitemapRes.ok) {
    console.error(`FEIL: /sitemap.xml svarte ${sitemapRes.status}`);
    process.exit(1);
  }
  const xml = await sitemapRes.text();
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => {
    const url = new URL(loc);
    return url.pathname === "" ? "/" : url.pathname;
  });

  const missing = requiredRoutes.filter((route) => !paths.includes(route));
  if (missing.length > 0) {
    console.error(`FEIL: obligatoriske ruter mangler i sitemap: ${missing.join(", ")}`);
    process.exit(1);
  }

  let failures = 0;
  for (const path of paths) {
    const res = await fetch(`${base}${path}`);
    const body = await res.text();
    const rendered404 = NOT_FOUND_H1.test(body);
    const ok = res.status === 200 && !rendered404;
    console.log(
      `${ok ? "OK  " : "FEIL"} ${res.status}${rendered404 ? " (404-innhold)" : ""} ${path}`
    );
    if (!ok) failures += 1;
  }

  console.log(`\n${paths.length - failures}/${paths.length} ruter OK (${base})`);
  if (failures > 0) process.exit(1);
}

main().catch((error) => {
  console.error(`FEIL: ${error.message}`);
  process.exit(1);
});
