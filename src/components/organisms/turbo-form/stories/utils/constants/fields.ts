import { Control, FieldValues } from 'react-hook-form'

import { ITurboFormField } from '../../../src'

export const defaultFields: ITurboFormField[] = [
  {
    type: 'text',
    controller: {
      controller: { name: 'user', control: {} as Control<FieldValues> },
      label: { text: 'Username' }
    }
  },
  {
    type: 'text',
    controller: {
      controller: { name: 'email', control: {} as Control<FieldValues> },
      label: { text: 'Email' }
    }
  },
  {
    type: 'password',
    controller: {
      controller: { name: 'password', control: {} as Control<FieldValues> },
      label: { text: 'Password' }
    }
  }
]
