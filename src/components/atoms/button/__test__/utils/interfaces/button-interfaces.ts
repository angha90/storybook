import { IButtonProps } from '../../../src/interfaces'

export interface ITestButtonCase {
  description: string
  props: IButtonProps
  expectedClasses: string[]
}
