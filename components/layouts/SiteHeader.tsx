import { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionaries';
import { FC } from 'react'
import MobileNav from './MobileNav';
import MainNav from './MainNav';

interface SiteHeaderProps {
    lang: Locale
}

const SiteHeader: FC<SiteHeaderProps> = async ({ lang }) => {
    const { NavMenu } = await getDictionary(lang);
    return (
        <>
            <MainNav NavMenu={NavMenu} />
            <MobileNav lang={lang} NavMenu={NavMenu} />
        </>
    )
}

export default SiteHeader