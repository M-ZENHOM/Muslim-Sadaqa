import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import SiteHeader from '@/components/layouts/SiteHeader'
import SiteFooter from '@/components/layouts/SiteFooter'
import { siteConfig } from '@/config/site'
import Providers from './Providers'
import { Locale } from '@/i18n-config';
import { arabicSans, inter } from '../../lib/fonts';

export async function generateMetadata({ params }: { params: { id: number, lang: Locale } }) {
  return {
    title: {
      default: `${params.lang === 'ar' ? 'مسلم صدقة' : 'Muslism Sadqa'}`,
      template: `%s - ${params.lang === 'ar' ? 'مسلم صدقة' : 'Muslism Sadqa'}`,
    },
    description: siteConfig.description,
    keywords: [
      "Quran",
      "Azkar",
      "Doaa",
      "أذكار",
      "دعاء",
      "قرأن",
      'تسبيح',
      "اذكار الصباح",
      'اذكار المساء',
      'سور',
      'سور القران',
      'quran surah'
    ],
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.title,
      images: [
        {
          url: `${siteConfig.url}/opengraph-image.png`,
          width: 1200,
          height: 630,
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [`${siteConfig.url}/opengraph-image.png`],
      creator: "@MAD_ZENHOM",
    },
    authors: [
      {
        name: "Mahmoud Zenhom",
        url: siteConfig.github,
      },
    ],
    publisher: 'Mahmoud Mohamed Zenhom',
    creator: "Mahmoud Zenhom",
    icons: {
      icon: "/icons/icon.png",
      shortcut: "/icons/favicon.ico",
      apple: "/icons/apple-icon.png",
    },
  }
}



export default function RootLayout({ children, params }: { children: React.ReactNode, params: { lang: Locale } }) {
  return (
    <html dir={params.lang === 'ar' ? 'rtl' : 'ltr'} lang={params.lang}>
      <body className={params.lang === 'ar' ? arabicSans.className : inter.className}>
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
  )
}
