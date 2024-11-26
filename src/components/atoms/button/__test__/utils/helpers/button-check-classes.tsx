import { render, screen } from '@agharbi/storybook/common'

import { Button } from '../../../src'
import { ITestButtonCase } from '../interfaces'

export const buttonTestsrenderAndCheckButtonClasses = ({
  props,
  expectedClasses
}: ITestButtonCase) => {
  render(<Button {...props} />)

  const button = screen.getByTestId(props['data-testid'] || '')
  expect(button).toBeInTheDocument()
  expectedClasses.forEach((cls) => {
    expect(button).toHaveClass(cls)
  })
}
