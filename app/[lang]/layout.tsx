import { Locale } from '@/i18n-config'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Kufi_Arabic as SansArabic } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import SiteHeader from '@/components/layouts/SiteHeader'
import { QueryProvider } from '@/components/QueryProvider'
import SiteFooter from '@/components/layouts/SiteFooter'
import { siteConfig } from '@/config/site'

export const inter = Inter({ subsets: ['latin'] })
export const arabicSans = SansArabic({ subsets: ['arabic'], weight: ['400'] })

export const metadata: Metadata = {
  title: `${siteConfig.title}`,
  description: siteConfig.description,
}

export default function RootLayout({ children, params }: { children: React.ReactNode, params: { lang: Locale } }) {
  return (
    <html dir={params.lang === "ar" ? "rtl" : "ltr"} lang={params.lang}>
      <body className={arabicSans.className}>
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <SiteHeader lang={params.lang} />
            {children}
            <SiteFooter />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
