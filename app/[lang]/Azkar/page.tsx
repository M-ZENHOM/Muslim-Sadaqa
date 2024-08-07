import Wrapper from '@/components/Wrapper'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/Icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Locale } from '@/i18n-config';
import { getMuslimData } from '@/lib/getMuslimData';
import { getDictionary } from '@/dictionaries';

interface Zekr {
    zekr: string,
    repeat: number,
    bless: string
}
export async function generateMetadata({ params }: { params: { id: number, lang: Locale } }) {
    return {
        title: `${params.lang === 'ar' ? 'الاذكار' : 'Azkar'}`,
    }
}


export default async function page({ params: { lang } }: { params: { id: number, lang: Locale } }) {
    const { AzkarPage } = await getDictionary(lang)
    const Azkar = await getMuslimData('azkar', lang)
    return (
        <Wrapper className='py-20' >
            <h2 className='text-5xl font-extrabold text-center py-10 flex items-center justify-between'>{AzkarPage.Title} <Icons.Sun className='w-14 h-14' /></h2>
            <Tabs defaultValue="MorningAzkar" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                <TabsList  >
                    <TabsTrigger value="MorningAzkar">
                        {AzkarPage.MorningAzkar}
                    </TabsTrigger>
                    <TabsTrigger value="EvenAzkar">
                        {AzkarPage.EvenAzkar}
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="MorningAzkar" className='space-y-4'>
                    {Azkar.MorningAzkar.map((zakr: Zekr) => (
                        <Card key={zakr.repeat} className='p-4 space-y-3 bg-gradient-to-bl from-primary/25 to-60%'>
                            <CardTitle className='leading-10 text-md md:text-xl'>{zakr.zekr}</CardTitle>
                            <CardDescription>{zakr.bless}</CardDescription>
                            <CardContent className='flex gap-2 bg-muted py-2 px-4 rounded-lg w-fit'>
                                <h2 className='w-full'>عدد المرات</h2>
                                <span>{zakr.repeat}</span>
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>
                <TabsContent value="EvenAzkar" className='space-y-4'>
                    {Azkar.EvenAzkar.map((zakr: Zekr) => (
                        <Card key={zakr.repeat} className='p-4 space-y-3 bg-gradient-to-bl from-primary/25 to-60%'>
                            <CardTitle className='leading-10 text-md md:text-xl'>{zakr.zekr}</CardTitle>
                            <CardDescription>{zakr.bless}</CardDescription>
                            <CardContent className='flex gap-2 bg-muted py-2 px-4 rounded-lg w-fit'>
                                <h2>عدد المرات</h2>
                                <span>{zakr.repeat}</span>
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>
            </Tabs>
        </Wrapper>
    )
}   
