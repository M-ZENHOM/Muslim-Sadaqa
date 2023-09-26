"use client"
import { ThemeProvider } from '@/components/theme-provider'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { FC } from 'react'

interface ProvidersProps {
    children: React.ReactNode
}

const queryClient = new QueryClient()
const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default Providers