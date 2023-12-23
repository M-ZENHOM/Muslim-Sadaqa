"use client"
import React, { FC } from 'react'
import { Icons } from './Icons'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from './ui/skeleton'

interface TafsirProps {
    ayahNum: number
    ayahText: string
    lang: string
}

const Tafsir: FC<TafsirProps> = ({ ayahNum, ayahText, lang }) => {
    const { data, isLoading } = useQuery(["ayah", ayahNum, lang], () => axios.get(`https://api.alquran.cloud/v1/ayah/${ayahNum}/${lang === "ar" ? "ar.muyassar" : "en.asad"}`).then((res) => res.data.data));
    return (
        <Dialog>
            <DialogTrigger ><Icons.Tafsir className='hover:text-primary w-6 h-6' /></DialogTrigger>
            {isLoading ? (
                <DialogContent className='p-10'>
                    <Skeleton className='w-full h-6' />
                    <Skeleton className='w-full h-6' />
                    <div className='flex items-center gap-2'>
                        <Skeleton className='w-[200px] h-10 rounded-lg' />
                        <Skeleton className='w-[200px] h-10 rounded-lg' />
                    </div>
                </DialogContent>
            ) : (
                <DialogContent className='p-10' dir='rtl'>
                    <DialogHeader className='space-y-5 text-start'>
                        <DialogTitle className='leading-8'>
                            {ayahText}
                        </DialogTitle>
                        <DialogDescription>
                            {data?.text}
                        </DialogDescription>
                    </DialogHeader>
                    <div className='flex items-center gap-2'>
                        <span className='bg-muted rounded-lg w-fit p-2 px-4'>{data?.edition.name}</span>
                        <span className='bg-muted rounded-lg w-fit p-2 px-4'> {lang === "ar" ? data?.surah.name : data?.surah.englishNameTranslation}</span>
                    </div>
                </DialogContent>
            )
            }
        </Dialog >
    )
}

export default Tafsir


