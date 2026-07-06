/**
 * Internlenke-sjekk: henter alle sider fra sitemap, samler alle interne
 * href-er i rendret HTML og verifiserer at hver av dem svarer 200.
 *
 * Bruk: node scripts/check-links.mjs [baseUrl]   (standard http://localhost:3000)
 */

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

async function main() {
  const sitemapRes = await fetch(`${base}/sitemap.xml`);
  if (!sitemapRes.ok) {
    console.error(`FEIL: /sitemap.xml svarte ${sitemapRes.status}`);
    process.exit(1);
  }
  const xml = await sitemapRes.text();
  const pages = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, loc]) => {
    const url = new URL(loc);
    return url.pathname === "" ? "/" : url.pathname;
  });

  // Samle interne lenker fra alle sider (kun rendret HTML, ikke script-payload).
  const found = new Map(); // href -> første side den ble funnet på
  for (const page of pages) {
    const html = await (await fetch(`${base}${page}`)).text();
    // Fjern script-innhold så vi bare sjekker faktiske <a href>.
    const visible = html.replace(/<script[\s\S]*?<\/script>/g, "");
    for (const [, href] of visible.matchAll(/href="(\/[^"#?]*)/g)) {
      if (href.startsWith("/_next")) continue;
      if (!found.has(href)) found.set(href, page);
    }
  }

  let failures = 0;
  for (const [href, from] of [...found.entries()].sort()) {
    const res = await fetch(`${base}${href}`);
    const ok = res.status === 200;
    if (!ok) {
      failures += 1;
      console.log(`FEIL ${res.status} ${href} (først funnet på ${from})`);
    }
  }

  console.log(
    `${found.size - failures}/${found.size} interne lenker OK på tvers av ${pages.length} sider (${base})`
  );
  if (failures > 0) process.exit(1);
}

main().catch((error) => {
  console.error(`FEIL: ${error.message}`);
  process.exit(1);
});
