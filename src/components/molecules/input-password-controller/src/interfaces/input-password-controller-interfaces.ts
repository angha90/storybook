import { Control, FieldValues } from 'react-hook-form'

import { IInputPasswordProps } from '@agharbi/storybook/components/atoms'

export interface IInputPasswordControllerRootProps {
  className?: string
  'data-testid'?: string
}

export interface IInputPasswordControllerControllerProps {
  control: Control<FieldValues>
  name: string
}

export interface IInputPasswordControllerLabelProps {
  text?: string
}

export interface IInputPasswordControllerErrorProps {
  text?: string
}

export interface IInputPasswordControllerProps {
  root?: IInputPasswordControllerRootProps
  label?: IInputPasswordControllerLabelProps
  controller: IInputPasswordControllerControllerProps
  input?: IInputPasswordProps
  error?: IInputPasswordControllerErrorProps
}
