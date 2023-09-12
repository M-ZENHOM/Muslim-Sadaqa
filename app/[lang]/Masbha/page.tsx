"use client"
import Image from 'next/image'
import React from 'react'
import MsbhaImg from '../../../public/Masbha/3.png'

export default function page() {
  const [count, setCount] = React.useState(0);
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='relative flex justify-center items-center w-fit h-fit'>
        <Image className='relative' src={MsbhaImg} width={300} height={300} priority alt='Masbha' />
        <span className='absolute text-5xl top-[23%] blur-[1px]'>{count}</span>
        <button onClick={() => setCount((prev) => prev + 1)} className='absolute top-[50%] translate-y-[37%] bg-transparent w-32 h-28 rounded-full' />
        <button onClick={() => setCount(0)} className='absolute top-[48%] translate-y-[37%] right-[18%] bg-transparent w-10 h-10 rounded-full' />
      </div>
    </div>
  )
}
