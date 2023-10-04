"use client"
import { Button } from './ui/button'
import { setLangCookie } from '@/actions/Lang'
import { usePathname, useRouter } from 'next/navigation'

const LangToggle = () => {
    const router = useRouter()
    const pathName = usePathname()
    const filterPathName = pathName.split(" ").map((item) => item.slice(3)).join(" ")
    const handleToggle = (lang: string) => {
        setLangCookie(lang)
        router.push(`/${lang}/${filterPathName}`)
    }
    return (
        <div className='flex items-center gap-2'>
            <Button className='text-center text-md' variant="outline" onClick={() => handleToggle("en")}>EN</Button>
            <Button className='text-center text-md' variant="outline" onClick={() => handleToggle("ar")}>AR</Button>
        </div>
    )
}

export default LangToggle