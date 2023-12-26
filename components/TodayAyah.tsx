'use client'
import { Icons } from './Icons'
import { Button } from './ui/button'
import { Card, CardTitle } from './ui/card'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

export default function TodayAyah({ AyahBoxTitle, Ayah, lang }: { AyahBoxTitle: string, Ayah: string, lang: string }) {
    const [_, copy] = useCopyToClipboard()
    return (
        <Card className='w-full h-60  p-8 text-center space-y-3 bg-gradient-to-br from-primary/25 to-50% flex flex-col items-center justify-center'>
            <CardTitle className='text-muted-foreground'>{AyahBoxTitle}</CardTitle>
            <h2 className='text-lg'>{Ayah}</h2>
            <Button className='flex' onClick={() => copy(Ayah)}>
                {lang === "ar" ? "نسخ الاية" : "Copy Ayah"} <Icons.Copy className='w-6 h-6 mr-2 cursor-pointer  p-1' />
            </Button>
        </Card>
    )
}
