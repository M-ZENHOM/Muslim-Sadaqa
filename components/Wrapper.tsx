import { cn } from '@/lib/utils'
import { FC } from 'react'

interface WrapperProps {
    children: React.ReactNode
    className?: string
}

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
    return <section className={cn("w-full max-w-7xl mx-auto px-4", className)}>{children}</section>
}

export default Wrapper