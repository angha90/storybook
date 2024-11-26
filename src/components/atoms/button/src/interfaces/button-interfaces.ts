import { ButtonProps } from 'primereact/button'

export type ButtonType =
  | 'primary'
  | 'secondary'
  | 'secondary-borderless'
  | 'tertiary'
  | 'quaternary'
  | 'quaternary-borderless'
  | 'filter'
  | 'icon-primary'
  | 'icon'
  | 'icon-borderless'
  | 'none'
export type ButtonSize = 'sm' | 'lg' | 'xl' | '2xl' | 'md'
export interface IButtonPtProps {
  type?: ButtonType
  size?: ButtonSize
}

export interface IButtonCustomizeProps {
  type?: ButtonType
  size?: ButtonSize
}

export interface IButtonProps extends ButtonProps {
  customize?: IButtonCustomizeProps
  'data-testid'?: string
}
