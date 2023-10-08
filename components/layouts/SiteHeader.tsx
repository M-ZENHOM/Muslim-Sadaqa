import MobileNav from './MobileNav';
import MainNav from './MainNav';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/app/[lang]/dictionaries';


const SiteHeader = async ({ lang }: { lang: Locale }) => {
    const { NavMenu } = await getDictionary(lang)
    return (
        <>
            <MainNav NavMenu={NavMenu} />
            <MobileNav NavMenu={NavMenu} />
        </>
    )
}

export default SiteHeader