import {
  CONTACT_EMAIL,
  OWNER_NAME,
  OWNER_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./constants";

/**
 * Ærlige JSON-LD-byggere. Ingen ratings, ingen anmeldelser, ingen
 * schema-typer uten reelt innhold bak.
 */

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "nb-NO",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: OWNER_NAME,
    url: OWNER_URL,
    email: CONTACT_EMAIL,
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.path === "/" ? SITE_URL : `${SITE_URL}${crumb.path}`,
    })),
  };
}

export type FaqItem = { question: string; answer: string };

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function webPageSchema(opts: {
  title: string;
  description: string;
  path: string;
}) {
  const url = opts.path === "/" ? SITE_URL : `${SITE_URL}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.title,
    description: opts.description,
    url,
    inLanguage: "nb-NO",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
    inLanguage: "nb-NO",
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function itemListSchema(opts: {
  name: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: opts.name,
    itemListElement: opts.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${SITE_URL}${item.path}`,
    })),
  };
}
