import { FC } from 'react'
import { Card } from './ui/card'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import QuranImg from '../public/Quran2.png'
import { QuranData } from '@/types'
import Link from 'next/link'

interface SurahSideBarProps {
    Surah: {
        data: QuranData
    }
    lang: string
    SurahPage: {
        surahBtn: string,
        surahBtnTwo: string,
        Ayahs: string
    }
}

const SurahSideBar: FC<SurahSideBarProps> = ({ Surah, lang, SurahPage }) => {
    return (
        <Card className='flex flex-col items-start  h-fit lg:h-[89vh] w-full lg:w-[300px] p-8 my-5 border border-primary/50 rounded-lg  bg-muted/25 bg-gradient-to-tr from-primary/25 to-50% '>
            <Image src={QuranImg} width={200} height={200} priority alt='Quran img' className='hidden lg:block' />
            <div className='flex flex-col space-y-5 font-extrabold w-full'>
                <h2>{lang === "ar" ? Surah.data?.name : Surah.data?.englishName} </h2>
                {lang === "en" && <h4>{Surah.data?.englishNameTranslation}</h4>}
                <span>{Surah.data?.numberOfAyahs} {SurahPage.Ayahs}</span>
                <span>{lang === "ar" ? Surah.data?.revelationType === "Medinan" ? "مدنيه" : "مكيه" : Surah.data?.revelationType}</span>
                <Link className={cn(buttonVariants({ variant: "default" }), { 'pointer-events-none opacity-50': Surah.data.number === 114 })} href={{ pathname: `/surah/${Surah.data.number + 1}` }} >{SurahPage.surahBtn}</Link>
                <Link className={cn(buttonVariants({ variant: "default" }), { 'pointer-events-none opacity-50': Surah.data.number === 1 })} href={{ pathname: `/surah/${Surah.data.number - 1}` }} >{SurahPage.surahBtnTwo}</Link>
            </div>

        </Card>
    )
}

export default SurahSideBar