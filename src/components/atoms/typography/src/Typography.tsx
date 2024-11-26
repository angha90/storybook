import { classNames } from 'primereact/utils'

import { TypographyProps } from './interfaces'

export const Typography = ({
  tag: Tag = 'span',
  children,
  testId,
  color,
  font,
  size,
  weight,
  height,
  className,
  hide = false
}: TypographyProps) => {
  if (hide) return null

  return (
    <Tag
      data-testid={testId}
      className={classNames({
        [`${color}`]: !!color,
        [`${font}`]: !!font,
        [`${size}`]: !!size,
        [`${weight}`]: !!weight,
        [`${height}`]: !!height,
        [`${className}`]: !!className
      })}
    >
      {children}
    </Tag>
  )
}
