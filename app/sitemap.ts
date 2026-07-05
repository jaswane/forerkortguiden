import type { MetadataRoute } from "next";
import { guides } from "@/data/guides";
import { licenseClasses } from "@/data/licenseClasses";
import { tools } from "@/data/tools";
import { SITE_URL } from "@/lib/constants";
import { routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    routes.home,
    routes.klasser,
    routes.taForerkort,
    routes.trafikaltGrunnkurs,
    routes.ovelseskjoring,
    routes.teoriprove,
    routes.oppkjoring,
    routes.kostnad,
    routes.tilhenger,
    routes.motorsykkelOgMoped,
    routes.verktoy,
    routes.guider,
    routes.kilderOgMetode,
    routes.om,
    routes.kontakt,
    routes.personvern,
  ];

  const classPaths = licenseClasses.map((klass) => routes.klasse(klass.slug));
  const toolPaths = tools.map((tool) => tool.href);
  const guidePaths = guides.map((guide) => guide.href);

  return [...staticPaths, ...classPaths, ...toolPaths, ...guidePaths].map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
