import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { FC } from 'react'
import { ThemeToggle } from '../ThemeToggle';
import { LangToggle } from '../LangToggle';
import Wrapper from '../Wrapper';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Icons } from '../Icons';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import Link from 'next/link';
import { inter } from '@/app/[lang]/layout';

interface SiteHeaderProps {
    lang: Locale
}

const SiteHeader: FC<SiteHeaderProps> = async ({ lang }) => {
    const { siteConfig } = await getDictionary(lang);
    return (
        <header className={cn("w-full py-4", inter.className)} dir={lang === "ar" ? "rtl" : "ltr"}>
            <Wrapper className='flex w-full justify-between items-center'>
                <Link href='/'>{siteConfig.title}</Link>
                <div className="flex items-center space-x-2">
                    <Sheet>
                        <SheetTrigger className={cn(buttonVariants({ variant: "outline" }), { "mx-2": lang === "ar" })}>
                            <Icons.Setting />
                        </SheetTrigger>
                        <SheetContent side={lang === "ar" ? "left" : "right"}>
                            <SheetHeader>
                                <SheetTitle className='border-b pb-4'>Setting</SheetTitle>
                                <ThemeToggle />
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    <LangToggle />
                </div>
            </Wrapper>
        </header>
    )
}

export default SiteHeader