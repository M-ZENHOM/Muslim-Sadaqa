import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import SiteHeader from "@/components/layouts/SiteHeader";
import SiteFooter from "@/components/layouts/SiteFooter";
import Providers from "./Providers";
import { Locale } from "@/i18n-config";
import { arabicSans, inter } from "../../lib/fonts";
import { generateMetadata } from "@/config/metadata";

export { generateMetadata };

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html dir={params.lang === "ar" ? "rtl" : "ltr"} lang={params.lang}>
      <body
        className={
          params.lang === "ar" ? arabicSans.className : inter.className
        }
      >
        <Providers>
          <main className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 transition-all duration-300">
            <aside className="fixed top-0 z-30  h-screen  shrink-0 md:sticky md:block">
              <SiteHeader lang={params.lang} />
            </aside>
            {children}
          </main>
          <SiteFooter />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
