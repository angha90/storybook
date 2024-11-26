import { ReactNode } from 'react'

export interface TypographyProps {
  tag?: keyof JSX.IntrinsicElements
  children: ReactNode
  testId?: string
  color?: string
  size?: string
  height?: string
  weight?: string
  font?: string
  className?: string
  hide?: boolean
}
