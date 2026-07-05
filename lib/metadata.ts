import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

type PageMeta = {
  title: string;
  description: string;
  /** Sti som begynner med «/», f.eks. «/forerkortklasser/klasse-b» */
  path: string;
};

/**
 * Bygger konsistent metadata med unik title/description og canonical
 * på https://forerkortguiden.no.
 */
export function buildMetadata({ title, description, path }: PageMeta): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "nb_NO",
      type: "website",
    },
  };
}
