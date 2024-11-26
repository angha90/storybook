import userEvent from '@testing-library/user-event'

import { render, screen } from '@agharbi/storybook/common'

import { InputPasswordWithState } from '../components'
import { inputPasswordTestsDefaultProps } from '../constants'
import { ITestPasswordTextCase } from '../interfaces'

export const inputPasswordTestsrenderAndCheckClasses = async ({
  description,
  password,
  expectedClasses,
  toggleMask = false
}: ITestPasswordTextCase) => {
  test(description, async () => {
    const props = inputPasswordTestsDefaultProps
    const testId = props['data-testid']
    render(<InputPasswordWithState {...props} toggleMask={toggleMask} />)
    const inputElement = screen.getByTestId(testId || '') as HTMLInputElement

    await userEvent.type(inputElement, password)
    const panelElement = screen.getByTestId(`${testId}-panel`)
    expect(panelElement).toBeInTheDocument()

    const meterLabelElement = screen.getByTestId(`${testId}-meter-label`)
    expect(meterLabelElement).toHaveClass(expectedClasses)
  })
}
