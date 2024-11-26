import { Password } from 'primereact/password'

import { globalPassthroughOptions } from '@agharbi/storybook/common'

import { IInputPasswordProps } from './interfaces'
import { inputPasswordPt } from './styles'

export const InputPassword = ({ customize, ...props }: IInputPasswordProps) => {
  return (
    <div className={customize?.className}>
      <Password
        {...props}
        pt={inputPasswordPt({ testId: props['data-testid'] })}
        ptOptions={globalPassthroughOptions}
      />
    </div>
  )
}
