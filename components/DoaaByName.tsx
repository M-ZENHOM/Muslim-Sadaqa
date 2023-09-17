"use client"
import React, { FC, useRef } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import DoaaName from './DoaaName'
import { DiedDoaa } from '@/config/static/DiedDoaa'

interface DoaaByNameProps {

}

const DoaaByName: FC<DoaaByNameProps> = ({ }) => {
    const [name, setName] = React.useState<string | undefined>("")
    const ref = useRef<HTMLInputElement>(null)

    return (
        <div >
            <div className='flex  items-center md:justify-between flex-wrap md:flex-nowrap justify-center space-y-3 md:space-y-0'>
                <Input ref={ref} defaultValue={ref.current?.value} placeholder='ادخل اسم المتوفي' />
                <Button onClick={() => setName(ref.current?.value)} className='mr-2 w-full max-w-[10rem]' >اظهر الادعية</Button>

            </div>
            {name && <div className='py-5 text-xl space-y-5 flex flex-col items-start'>
                {DiedDoaa.content.map((doaa, i) => (
                    <DoaaName key={i} fristPart={doaa.fristPart} SecPart={doaa.secPart} name={name} />
                ))}
            </div>}
        </div>
    )
}

export default DoaaByName