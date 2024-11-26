import { Control, FieldValues } from 'react-hook-form'

import { IInputTextProps } from '@agharbi/storybook/components/atoms'

export interface IInputTextControllerRootProps {
  className?: string
  'data-testid'?: string
}

export interface IInputTextControllerControllerProps {
  control: Control<FieldValues>
  name: string
}

export interface IInputTextControllerLabelProps {
  text?: string
}

export interface IInputTextControllerErrorProps {
  text?: string
}

export interface IInputTextControllerProps {
  root?: IInputTextControllerRootProps
  label?: IInputTextControllerLabelProps
  controller: IInputTextControllerControllerProps
  input?: IInputTextProps
  error?: IInputTextControllerErrorProps
}
