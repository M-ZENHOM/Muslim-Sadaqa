import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


let locales = ["ar", "en"]
export function middleware(request: NextRequest) {

    // const response = NextResponse.next()
    // response.cookies.set('lang', 'ar')


    const pathname = request.nextUrl.pathname


    // const defaultLang = request.cookies.set("lang", "ar")
    const lang = request.cookies.get('lang')?.value || "ar"


    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        return NextResponse.redirect(
            new URL(
                `/${lang}/${pathname}`,
                request.url
            )
        )
    }

}

export const config = {
    matcher: ['/((?!_next).*)'],
}
