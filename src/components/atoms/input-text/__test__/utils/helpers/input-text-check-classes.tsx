import { render } from '@agharbi/storybook/common'

import { InputText } from '../../../src'
import { inputTextTestsDefaultProps } from '../constants'
import { ITestInputTextCase } from '../interfaces'

export const inputTextTestsrenderAndCheckClasses = ({
  props,
  expectedClasses
}: ITestInputTextCase) => {
  const { container } = render(
    <InputText {...inputTextTestsDefaultProps} {...props} />
  )
  const input = container.querySelector('input')
  expect(input).toHaveClass(expectedClasses)
}
