import { InputTextProps } from 'primereact/inputtext'

export interface IInputTextCustomizeProps {
  className?: string
}
export interface IInputTextProps extends InputTextProps {
  customize?: IInputTextCustomizeProps
  'data-testid'?: string
}
