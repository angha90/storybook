import { render, screen } from '@agharbi/storybook/common'

import { InputTextController } from '../../src'
import { inputTextControllerTestsDefaultProps } from '../utils'

describe('InputTextController: unit tests', () => {
  const { controller, root } = inputTextControllerTestsDefaultProps
  const testId = root?.['data-testid']
  test('renders without errors', () => {
    render(<InputTextController {...inputTextControllerTestsDefaultProps} />)
    expect(screen.getByTestId(`${testId}-input`)).toBeInTheDocument()
  })

  test('renders without label when label prop is empty', () => {
    render(<InputTextController {...inputTextControllerTestsDefaultProps} />)
    expect(screen.queryByTestId(`${testId}-label`)).not.toBeInTheDocument()
  })

  test('renders with label when label prop is filled', () => {
    render(
      <InputTextController
        label={{ text: 'test-label' }}
        {...inputTextControllerTestsDefaultProps}
      />
    )
    const element = screen.queryByTestId(`${testId}-label`)
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent('test-label')
  })

  test('renders without error when there is no error', () => {
    render(<InputTextController {...inputTextControllerTestsDefaultProps} />)
    expect(screen.queryByTestId(`${testId}-error`)).not.toBeInTheDocument()
  })

  test('renders with error when there is an error', () => {
    render(
      <InputTextController
        error={{ text: 'there is some error' }}
        {...inputTextControllerTestsDefaultProps}
      />
    )
    const errorElemnt = screen.queryByTestId(`${testId}-error`)
    expect(errorElemnt).toBeInTheDocument()
    expect(errorElemnt).toHaveTextContent('there is some error')
    const inputElemnt = screen.queryByTestId(`${testId}-input`)
    expect(inputElemnt).toHaveClass('sbl-border-danger')
  })

  test('passes control and name correctly to the InputText component', () => {
    render(<InputTextController {...inputTextControllerTestsDefaultProps} />)
    const inputElement = screen.getByTestId(`${testId}-input`)
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('name', controller.name)
  })
})
