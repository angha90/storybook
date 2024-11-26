import { PasswordPassThroughOptions } from 'primereact/password'

import { IInputPasswordPtProps } from '../interfaces'

export const inputPasswordPt = ({
  testId
}: IInputPasswordPtProps): PasswordPassThroughOptions => ({
  panel: {
    'data-testId': `${testId}-panel`
  },
  meterLabel: {
    'data-testId': `${testId}-meter-label`
  }
})
