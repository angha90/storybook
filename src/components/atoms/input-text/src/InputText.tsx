import { InputText as PrimeReactInputText } from 'primereact/inputtext'

import { IInputTextProps } from './interfaces'

export const InputText = ({ customize, ...props }: IInputTextProps) => {
  return (
    <div className={customize?.className}>
      <PrimeReactInputText {...props} type="text" />
    </div>
  )
}
