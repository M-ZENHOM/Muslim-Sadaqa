import MobileNav from './MobileNav';
import MainNav from './MainNav';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/app/[lang]/dictionaries';


const SiteHeader = async ({ lang }: { lang: Locale }) => {
    const { NavMenu } = await getDictionary(lang)
    return (
        <>
            <MainNav lang={lang} NavMenu={NavMenu} />
            <MobileNav lang={lang} NavMenu={NavMenu} />
        </>
    )
}

export default SiteHeader