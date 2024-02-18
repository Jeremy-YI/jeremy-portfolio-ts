import { FC } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  [key: string]: any
}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <motion.button
      className={twMerge(' w-40 h-10 bg-black text-cyan-50', className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
