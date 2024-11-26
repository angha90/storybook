import { Button as PrimeReactButton } from 'primereact/button'

import { globalPassthroughOptions } from '@agharbi/storybook/common'

import { IButtonProps } from './interfaces'
import { buttonPt } from './styles'

export const Button = ({
  customize = { type: 'tertiary', size: 'md' },
  ...props
}: IButtonProps) => {
  return (
    <PrimeReactButton
      {...props}
      pt={buttonPt({ type: customize.type, size: customize.size })}
      ptOptions={globalPassthroughOptions}
    />
  )
}
