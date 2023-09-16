import { Locale } from '@/i18n-config'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Kufi_Arabic as SansArabic } from 'next/font/google'
import SiteHeader from '@/components/layouts/SiteHeader'
import SiteFooter from '@/components/layouts/SiteFooter'
import { siteConfig } from '@/config/site'
import Providers from './Providers'

export const inter = Inter({ subsets: ['latin'] })
export const arabicSans = SansArabic({ subsets: ['arabic'], weight: ['400'] })

export const metadata: Metadata = {
  title: `${siteConfig.title}`,
  description: siteConfig.description,
}

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { lang: Locale } }) {
  return (
    <html dir="rtl" lang="ar">
      <body className={arabicSans.className}>
        <Providers>
          <main className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <aside className="fixed top-0 z-30  h-screen  shrink-0 md:sticky md:block">
              <SiteHeader lang={params.lang} />
            </aside>
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  )
}
