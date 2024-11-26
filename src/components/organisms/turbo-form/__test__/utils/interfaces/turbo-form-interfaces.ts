import { Control } from 'react-hook-form'

import { ITurboFormUseFormReturn } from '../../../src'

export interface ITurboFormTestControl {
  control: Control
}

export interface ITurboFormTestDefaultRhForm {
  rhForm: ITurboFormUseFormReturn
}

export interface ITurboFormTestValues {
  user: string
  email: string
  password: string
}
