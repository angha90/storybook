import { UseFormReturn } from 'react-hook-form'

import { IButtonProps } from '@agharbi/storybook/components/atoms'
import {
  IInputPasswordControllerProps,
  IInputTextControllerProps
} from '@agharbi/storybook/components/molecules'

export type IBoostFormAction = IButtonProps

export type IBoostFormFieldType = 'text' | 'password'

export interface IBoostFormFieldBase {
  type: IBoostFormFieldType
}

export interface IBoostFormFieldText extends IBoostFormFieldBase {
  type: 'text'
  controller: IInputTextControllerProps
}

export interface IBoostFormFieldPassword extends IBoostFormFieldBase {
  type: 'password'
  controller: IInputPasswordControllerProps
}

export type IBoostFormFieldByType =
  | IBoostFormFieldText
  | IBoostFormFieldPassword

export type IBoostFormField = IBoostFormFieldText | IBoostFormFieldPassword

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IBoostFormUseFormReturn<> = UseFormReturn<any>

export interface IGetBoostFormControllersProps {
  field: IBoostFormField
  rhForm: IBoostFormUseFormReturn
}

export interface IBoostFormActionsProps {
  testId?: string
  actions: IBoostFormAction[]
  className?: string
}

export interface IBoostFormFieldProps {
  field: IBoostFormField
  rhForm: IBoostFormUseFormReturn
}

export interface IBoostFormFieldsProps {
  testId?: string
  fields: IBoostFormField[]
  className?: string
  rhForm: IBoostFormUseFormReturn
}

export interface IBoostFormProps {
  testId?: string
  fields: IBoostFormField[]
  actions: IBoostFormAction[]
  rhForm: IBoostFormUseFormReturn
  onSubmit: () => void
  styles?: {
    container?: string
    content?: string
    actions?: string
  }
}
