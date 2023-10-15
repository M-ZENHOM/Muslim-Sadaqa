import { Inter, Noto_Kufi_Arabic as SansArabic } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin']
})
export const arabicSans = SansArabic({
    subsets: ['arabic'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})