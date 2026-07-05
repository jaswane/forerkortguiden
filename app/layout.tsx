import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – uavhengig veiviser til førerkort i Norge`,
    template: `%s – ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={inter.variable}>
      <body>
        <a href="#hovedinnhold" className="skip-link">
          Hopp til hovedinnhold
        </a>
        <Header />
        <main id="hovedinnhold">{children}</main>
        <Footer />
        <JsonLd data={websiteSchema()} />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
