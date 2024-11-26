import { UseFormReturn } from 'react-hook-form'

import { IButtonProps } from '@agharbi/storybook/components/atoms'
import {
  IInputPasswordControllerProps,
  IInputTextControllerProps
} from '@agharbi/storybook/components/molecules'

export type ITurboFormAction = IButtonProps

export type ITurboFormFieldType = 'text' | 'password'

export interface ITurboFormFieldBase {
  type: ITurboFormFieldType
}

export interface ITurboFormFieldText extends ITurboFormFieldBase {
  type: 'text'
  controller: IInputTextControllerProps
}

export interface ITurboFormFieldPassword extends ITurboFormFieldBase {
  type: 'password'
  controller: IInputPasswordControllerProps
}

export type ITurboFormFieldByType =
  | ITurboFormFieldText
  | ITurboFormFieldPassword

export type ITurboFormField = ITurboFormFieldText | ITurboFormFieldPassword

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ITurboFormUseFormReturn<> = UseFormReturn<any>

export interface IGetTurboFormControllersProps {
  field: ITurboFormField
  rhForm: ITurboFormUseFormReturn
}

export interface ITurboFormActionsProps {
  testId?: string
  actions: ITurboFormAction[]
  className?: string
}

export interface ITurboFormFieldProps {
  field: ITurboFormField
  rhForm: ITurboFormUseFormReturn
}

export interface ITurboFormFieldsProps {
  testId?: string
  fields: ITurboFormField[]
  className?: string
  rhForm: ITurboFormUseFormReturn
}

export interface ITurboFormProps {
  testId?: string
  fields: ITurboFormField[]
  actions: ITurboFormAction[]
  rhForm: ITurboFormUseFormReturn
  onSubmit: () => void
  styles?: {
    container?: string
    content?: string
    actions?: string
  }
}
