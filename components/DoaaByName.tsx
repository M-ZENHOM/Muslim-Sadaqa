"use client"
import React, { FC, useRef } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import DoaaName from './DoaaName'
import { DeadDoaa } from '@/config/static/DeadDoaa'

interface DoaaByNameProps {
    DeadDoaaPage: {
        inputPlaceholder: string,
        BtnTitle: string
    }
}

const DoaaByName: FC<DoaaByNameProps> = ({ DeadDoaaPage }) => {
    const [name, setName] = React.useState<string | undefined>("")
    const ref = useRef<HTMLInputElement>(null)

    return (
        <div >
            <div className='flex  items-center md:justify-between flex-wrap md:flex-nowrap justify-center space-y-3 md:space-y-0'>
                <Input ref={ref} defaultValue={ref.current?.value} placeholder={DeadDoaaPage.inputPlaceholder} />
                <Button onClick={() => setName(ref.current?.value)} className='mr-2 w-full max-w-[10rem]' > {DeadDoaaPage.BtnTitle}</Button>

            </div>
            {name && <div className='py-5 text-xl space-y-5 flex flex-col items-start'>
                {DeadDoaa.content.map((doaa, i) => (
                    <DoaaName key={i} fristPart={doaa.fristPart} SecPart={doaa.secPart} name={name} />
                ))}
            </div>}
        </div>
    )
}

export default DoaaByName