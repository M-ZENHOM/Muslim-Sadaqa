import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n-config'

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const lang = request.cookies.get('lang')?.value || "ar"
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`)

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(
            new URL(
                `/${lang}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            )
        )
    }

}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|reciters|favicon.ico|Masbha.png|opengraph-image.png).*)'],
}
