import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


let locales = ["ar", "en"]
export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(
            new URL(
                `/ar/${pathname}`,
                request.url
            )
        )
    }
}

export const config = {
    matcher: ['/((?!_next).*)'],
}