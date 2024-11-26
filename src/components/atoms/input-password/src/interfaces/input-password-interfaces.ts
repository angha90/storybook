import { PasswordProps } from 'primereact/password'

export interface IInputPasswordPtProps {
  testId?: string
}
export interface IInputPasswordProps extends PasswordProps {
  customize?: {
    className?: string
  }
  'data-testid'?: string
}
