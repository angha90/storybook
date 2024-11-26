import { render, screen } from '@agharbi/storybook/common'

import { InputPasswordController } from '../../src'
import { inputPasswordControllerTestsDefaultProps } from '../utils'

describe('InputPasswordController: unit tests', () => {
  const { controller, root } = inputPasswordControllerTestsDefaultProps
  const testId = root?.['data-testid']
  test('renders without errors', () => {
    render(
      <InputPasswordController {...inputPasswordControllerTestsDefaultProps} />
    )
    expect(screen.getByTestId(`${testId}-input`)).toBeInTheDocument()
  })

  test('renders without label when label prop is empty', () => {
    render(
      <InputPasswordController {...inputPasswordControllerTestsDefaultProps} />
    )
    expect(screen.queryByTestId(`${testId}-label`)).not.toBeInTheDocument()
  })

  test('renders with label when label prop is filled', () => {
    render(
      <InputPasswordController
        label={{ text: 'test-label' }}
        {...inputPasswordControllerTestsDefaultProps}
      />
    )
    const element = screen.queryByTestId(`${testId}-label`)
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('test-label')
  })

  test('renders without error when there is no error', () => {
    render(
      <InputPasswordController {...inputPasswordControllerTestsDefaultProps} />
    )
    expect(screen.queryByTestId(`${testId}-error`)).not.toBeInTheDocument()
  })

  test('renders with error when there is an error', () => {
    render(
      <InputPasswordController
        error={{ text: 'there is some error' }}
        {...inputPasswordControllerTestsDefaultProps}
      />
    )
    const errorElemnt = screen.queryByTestId(`${testId}-error`)
    expect(errorElemnt).toBeInTheDocument()
    expect(errorElemnt).toHaveTextContent('there is some error')
    const inputElemnt = screen.queryByTestId(`${testId}-input`)
    expect(inputElemnt).toHaveClass('sbl-border-danger')
  })

  test('passes control and name correctly to the InputPassword component', () => {
    render(
      <InputPasswordController {...inputPasswordControllerTestsDefaultProps} />
    )
    const inputElement = screen.getByTestId(`${testId}-input`)
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('name', controller.name)
  })
})
