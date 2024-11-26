import { FieldValues } from 'react-hook-form'

import { ITurboFormField } from '../../../src'
import {
  turboFormInputEmailTestId,
  turboFormInputPasswordTestId,
  turboFormInputUserTestId,
  turboFormTestDefaultActions,
  turboFormTestDefaultStyles,
  turboFormTestId
} from '../constants'
import {
  ITurboFormTestControl,
  ITurboFormTestDefaultRhForm
} from '../interfaces'

export const turboFormTestDefaultFields = ({
  control
}: ITurboFormTestControl): ITurboFormField[] => [
  {
    type: 'text',
    controller: {
      controller: { name: 'user', control },
      root: { 'data-testid': turboFormInputUserTestId },
      label: { text: 'Nombre de usuario' }
    }
  },
  {
    type: 'text',
    controller: {
      controller: { name: 'email', control },
      root: { 'data-testid': turboFormInputEmailTestId },
      label: { text: 'Email' }
    }
  },
  {
    type: 'password',
    controller: {
      controller: { name: 'password', control },
      root: { 'data-testid': turboFormInputPasswordTestId },
      label: { text: 'Contraseña' }
    }
  }
]

export const turboFormTestHandleSubmit = (data: FieldValues) => {
  alert(`Success: payload = ${JSON.stringify(data)}`)
}

export const turboFormTestDefaultProps = ({
  rhForm
}: ITurboFormTestDefaultRhForm) => ({
  testId: turboFormTestId,
  actions: turboFormTestDefaultActions,
  fields: turboFormTestDefaultFields({ control: rhForm.control }),
  rhForm: rhForm,
  onSubmit: rhForm.handleSubmit(turboFormTestHandleSubmit),
  styles: turboFormTestDefaultStyles
})
