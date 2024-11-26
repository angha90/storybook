import {
  InputErrorTypography,
  render,
  screen
} from '@agharbi/storybook/common'

describe('InputErrorTypography Component: unit tests', () => {
  const testId = 'input-error-typography-testid'

  test('renders without crashing', () => {
    render(<InputErrorTypography testId={testId} label="Error message" />)
    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })

  test('does not render when label is empty', () => {
    render(<InputErrorTypography testId={testId} />)
    expect(screen.queryByTestId(testId)).not.toBeInTheDocument()
  })

  test('renders label text correctly', () => {
    const label = 'Error message'
    render(<InputErrorTypography testId={testId} label={label} />)
    expect(screen.getByText(label)).toBeInTheDocument()
  })

  test('applies correct properties to Typography', () => {
    render(<InputErrorTypography testId={testId} label="Error message" />)
    const element = screen.getByTestId(testId)
    expect(element).toHaveClass('sbl-font-roboto')
    expect(element).toHaveClass('sbl-font-normal')
    expect(element).toHaveClass('sbl-text-xs')
    expect(element).toHaveClass('sbl-text-danger')
  })
})
