import MobileNav from './MobileNav';
import MainNav from './MainNav';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/dictionaries';


const SiteHeader = async ({ lang }: { lang: Locale }) => {
    const { NavMenu } = await getDictionary(lang)
    return (
        <>
            <MainNav NavMenu={NavMenu} lang={lang} />
            <MobileNav NavMenu={NavMenu} lang={lang} />
        </>
    )
}

export default SiteHeader