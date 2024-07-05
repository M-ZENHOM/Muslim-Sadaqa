import { arabicNumeralFormatter, cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import type { Locale } from '@/i18n-config'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export default function SurahDetails({ lang, Surah, SurahPage }: { lang: Locale, Surah: { data: { name: string, englishName: string, englishNameTranslation: string, numberOfAyahs: number, revelationType: string, number: number } }, SurahPage: { Ayahs: string, surahBtn: string, surahBtnTwo: string } }) {
    return (
        <Card className='bg-muted/25 bg-gradient-to-tr from-primary/25 to-50% w-full max-w-xl'>
            <CardHeader >
                <CardTitle className='text-sm md:text-xl'>{lang === "ar" ? Surah.data?.name : Surah.data?.englishName}  - {lang === 'ar' ? arabicNumeralFormatter(String(Surah.data?.numberOfAyahs),false) : Surah.data?.numberOfAyahs } {SurahPage.Ayahs}</CardTitle>
                <CardDescription>{lang === "en" && `${Surah.data?.englishNameTranslation} - `}  {lang === "ar" ? Surah.data?.revelationType === "Medinan" ? "مدنيه" : "مكيه" : Surah.data?.revelationType}  </CardDescription>
            </CardHeader>
            <CardContent className={cn('flex gap-4 text-sm')}>
                <Link className={cn('text-sm bg-primary text-primary-foreground px-3 py-2 rounded-xl', { 'pointer-events-none opacity-50': Surah.data.number === 114 })}
                    href={{ pathname: `/${lang}/surah/${Surah.data.number + 1}` }}
                >{SurahPage.surahBtn}</Link>
                <Link className={cn('text-sm bg-primary text-primary-foreground px-3 py-2 rounded-xl',
                    { 'pointer-events-none opacity-50': Surah.data.number === 1 })}
                    href={{ pathname: `/${lang}/surah/${Surah.data.number - 1}` }}
                >{SurahPage.surahBtnTwo}</Link>
            </CardContent>
        </Card>
    )
}
