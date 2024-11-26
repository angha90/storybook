import { useState } from 'react'

import { IInputPasswordProps, InputPassword } from '../../../src'

export const InputPasswordWithState = (props: IInputPasswordProps) => {
  const [value, setValue] = useState<string>('')

  return (
    <InputPassword
      {...props}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
    />
  )
}
