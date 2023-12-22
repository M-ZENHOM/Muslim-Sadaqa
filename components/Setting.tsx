"use client"
import { Icons } from './Icons'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { ScrollArea } from './ui/scroll-area'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from './ui/sheet'
import { cn } from '@/lib/utils'
import useStore from '@/hooks/useStore'
import { useSettings } from '@/store'


interface SurahPageType {
    Reciter: string,
    Setting: string,
    SettingActionBtn: string,
    FontSize: string,
    FontStyle: string,
    FontNormal: string,
    FontBold: string
}
export default function Setting({ reciters, lang, SurahPage }: { reciters: { reciter_id: string, name: { en: string, ar: string }, type: { en: string, ar: string }, poster: string }[], lang: string, SurahPage: SurahPageType }) {
    const setting = useStore(useSettings, (state) => state)
    return (
        <Sheet>
            <SheetTrigger asChild >
                <div className={cn('fixed top-20 md:top-10 bg-primary text-primary-foreground  p-2 z-10 cursor-pointer', { "left-0 rounded-r-xl ": lang === 'ar', "right-0 rounded-l-xl": lang === 'en' })}>
                    <Icons.Setting aria-label='Setting' className='w-6 h-6 hover:animate-spin' />
                </div>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className='border-b py-5 text-xl font-extrabold'>
                    {SurahPage.Setting}
                </SheetHeader>
                <div className='space-y-4 py-4'>
                    <h2 className='font-bold tracking-tighter'>{SurahPage.Reciter}</h2>
                    <Select onValueChange={(e) => setting?.setReciter(e)} defaultValue={setting?.settings[0]?.reciter} >
                        <SelectTrigger >
                            <SelectValue placeholder="Reciter" />
                        </SelectTrigger>
                        <SelectContent>
                            <ScrollArea className='h-[200px]'>
                                <SelectGroup>
                                    {reciters.map((rec) => (
                                        <SelectItem key={rec.reciter_id} value={rec.reciter_id}>{lang === 'ar' ? rec.name.ar : rec.name.en}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </ScrollArea>
                        </SelectContent>
                    </Select>
                </div>
                <div className='space-y-4 py-4'>
                    <div className='w-full flex items-center justify-between'>
                        <h2 className='font-bold tracking-tighter'>{SurahPage.FontSize}</h2>
                        <p className='text-xs  tracking-tighter '>  {`${lang === "ar" ? "حجم الخط" : "Font Size"}: ${setting?.settings[0]?.fontSize} ${lang === "ar" ? "بيكسل" : "px"}`}</p>
                    </div>
                    <input className='w-full' type="range" min="18" max="26" value={setting?.settings[0]?.fontSize} onChange={(e) => setting?.setFontSize(e.target.value)} />
                </div>
                <div className='space-y-4 py-4'>
                    <h2 className='font-bold tracking-tighter'>{SurahPage.FontStyle}</h2>
                    <RadioGroup defaultValue={setting?.settings[0]?.fontStyle} onValueChange={(e) => setting?.setFontStyle(e)}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="normal" id="normal" />
                            <Label htmlFor="normal">{SurahPage.FontNormal}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bold" id="bold" />
                            <Label htmlFor="bold">{SurahPage.FontBold}</Label>
                        </div>
                    </RadioGroup>
                </div>
                <SheetFooter>
                    <Button onClick={() => setting?.resetSetting()} type="submit">{SurahPage.SettingActionBtn}</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
