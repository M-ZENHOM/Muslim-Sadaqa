import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from '../ThemeToggle'


function MainNav({ NavMenu }: { NavMenu: { Home: string, MorningAzkar: string, EvenAzkar: string, title: string, Masbha: string } }) {
    return (
        <header className='w-60 bg-gradient-to-b from-muted border-l border-yellow-500/25 h-screen p-6 space-y-5 hidden md:flex md:flex-col'>
            <h2 className='font-extrabold uppercase text-xl bg-gradient-to-l from-yellow-500 p-4'>{NavMenu.title}</h2>
            <ul className='flex flex-col space-y-3 text-lg font-extrabold'>
                <Link className='' href="/" >{NavMenu.Home}</Link>
                <Link href="/MorningAzkar" >{NavMenu.MorningAzkar}</Link>
                <Link href="/EvenAzkar" >{NavMenu.EvenAzkar}</Link>
                <Link href="/Masbha" >{NavMenu.Masbha}</Link>
            </ul>
            <div className='flex  items-end h-full w-full'>
                <ThemeToggle />
            </div>
        </header>
    )
}

export default MainNav