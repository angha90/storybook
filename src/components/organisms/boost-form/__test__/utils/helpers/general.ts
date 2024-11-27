import { FieldValues } from 'react-hook-form'

import { IBoostFormField } from '../../../src'
import {
  BoostFormInputEmailTestId,
  BoostFormInputPasswordTestId,
  BoostFormInputUserTestId,
  BoostFormTestDefaultActions,
  BoostFormTestDefaultStyles,
  BoostFormTestId
} from '../constants'
import {
  IBoostFormTestControl,
  IBoostFormTestDefaultRhForm
} from '../interfaces'

export const BoostFormTestDefaultFields = ({
  control
}: IBoostFormTestControl): IBoostFormField[] => [
  {
    type: 'text',
    controller: {
      controller: { name: 'user', control },
      root: { 'data-testid': BoostFormInputUserTestId },
      label: { text: 'Nombre de usuario' }
    }
  },
  {
    type: 'text',
    controller: {
      controller: { name: 'email', control },
      root: { 'data-testid': BoostFormInputEmailTestId },
      label: { text: 'Email' }
    }
  },
  {
    type: 'password',
    controller: {
      controller: { name: 'password', control },
      root: { 'data-testid': BoostFormInputPasswordTestId },
      label: { text: 'Contraseña' }
    }
  }
]

export const BoostFormTestHandleSubmit = (data: FieldValues) => {
  alert(`Success: payload = ${JSON.stringify(data)}`)
}

export const BoostFormTestDefaultProps = ({
  rhForm
}: IBoostFormTestDefaultRhForm) => ({
  testId: BoostFormTestId,
  actions: BoostFormTestDefaultActions,
  fields: BoostFormTestDefaultFields({ control: rhForm.control }),
  rhForm: rhForm,
  onSubmit: rhForm.handleSubmit(BoostFormTestHandleSubmit),
  styles: BoostFormTestDefaultStyles
})
