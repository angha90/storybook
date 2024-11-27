import { Control } from 'react-hook-form'

import { IBoostFormUseFormReturn } from '../../../src'

export interface IBoostFormTestControl {
  control: Control
}

export interface IBoostFormTestDefaultRhForm {
  rhForm: IBoostFormUseFormReturn
}

export interface IBoostFormTestValues {
  user: string
  email: string
  password: string
}
