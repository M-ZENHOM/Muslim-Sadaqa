import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import type { Locale } from '@/i18n-config'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export default function SurahDetails({ lang, Surah, SurahPage }: { lang: Locale, Surah: { data: { name: string, englishName: string, englishNameTranslation: string, numberOfAyahs: number, revelationType: string, number: number } }, SurahPage: { Ayahs: string, surahBtn: string, surahBtnTwo: string } }) {
    return (
        <Card className='bg-muted/25 bg-gradient-to-tr from-primary/25 to-50% w-full max-w-xl  mt-20 md:my-6 mx-auto'>
            <CardHeader>
                <CardTitle>{lang === "ar" ? Surah.data?.name : Surah.data?.englishName}  - {Surah.data?.numberOfAyahs} {SurahPage.Ayahs}</CardTitle>
                <CardDescription>{lang === "en" && `${Surah.data?.englishNameTranslation} - `}  {lang === "ar" ? Surah.data?.revelationType === "Medinan" ? "مدنيه" : "مكيه" : Surah.data?.revelationType}  </CardDescription>
            </CardHeader>
            <CardContent className={cn({ 'space-x-4': lang === "en" })}>
                <Link className={cn(buttonVariants({ variant: "default" }),
                    { 'pointer-events-none opacity-50': Surah.data.number === 114 })}
                    href={{ pathname: `/${lang}/surah/${Surah.data.number + 1}` }}
                >{SurahPage.surahBtn}</Link>
                <Link className={cn('mr-4', buttonVariants({ variant: "default" }),
                    { 'pointer-events-none opacity-50': Surah.data.number === 1 })}
                    href={{ pathname: `/${lang}/surah/${Surah.data.number - 1}` }}
                >{SurahPage.surahBtnTwo}</Link>
            </CardContent>
        </Card>
    )
}
