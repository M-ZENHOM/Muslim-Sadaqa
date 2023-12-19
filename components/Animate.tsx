"use client"
import { FC } from 'react'
import { motion } from 'framer-motion'

interface AnimateProps {
    children: React.ReactNode
}

const Animate: FC<AnimateProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ translateY: "-20%" }}
            animate={{ translateY: "10%" }}
            exit={{ translateY: 0 }}
            transition={{ duration: 0.4 }}
        >{children}</motion.div>
    )
}

export default Animate