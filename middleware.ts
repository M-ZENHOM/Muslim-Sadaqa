import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n-config'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

function getLocale(request: NextRequest): string | undefined {
    // Negotiator expects plain object so we need to transform headers

    let headers = { 'accept-language': 'ar,ar;q=0.5' }
    let languages = new Negotiator({ headers }).languages()
    const locales = ['en', 'ar']
    let defaultLocale = 'ar'
    // const negotiatorHeaders: Record<string, string> = {}
    // request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    const locale = matchLocale(languages, locales, defaultLocale)

    return locale
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const query = request.nextUrl.searchParams

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(
            new URL(
                `/${locale}/${pathname.startsWith('/') ? '' : '/'}${pathname}?${query}`,
                request.url
            )
        )
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!_next).*)'],
}