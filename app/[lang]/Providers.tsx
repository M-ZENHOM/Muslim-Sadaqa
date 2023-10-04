"use client"
import { ThemeProvider } from '@/components/theme-provider'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import React, { FC } from 'react'

interface ProvidersProps {
    children: React.ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
    const [queryClient] = React.useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default Providers