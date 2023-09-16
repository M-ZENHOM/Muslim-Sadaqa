"use client"
import { ThemeProvider } from '@/components/theme-provider'
import { FC } from 'react'

interface ProvidersProps {
    children: React.ReactNode
}


const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
        </ThemeProvider>
    )
}

export default Providers