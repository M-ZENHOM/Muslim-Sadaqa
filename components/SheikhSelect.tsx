import React, { FC } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Locale } from '@/i18n-config'

interface SheikhSelectProps {
    lang: Locale
    reciters: {
        reciter_id: string,
        name: {
            en: string,
            ar: string
        },
        type: {
            en: string,
            ar: string
        },
        poster: string
    }[]
    setReciter: (rec: string) => void
    reciter: string

}

const SheikhSelect: FC<SheikhSelectProps> = ({ reciters, lang, setReciter, reciter }) => {
    return (
        <Select onValueChange={(e) => setReciter(e)} defaultValue={reciter} >
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Sheikh Sound" />
            </SelectTrigger>
            <SelectContent >
                {reciters.map((rec) => (
                    <SelectItem key={rec.reciter_id} value={rec.reciter_id}>{lang === 'ar' ? rec.name.ar : rec.name.en}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default SheikhSelect