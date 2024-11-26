import {
  InputLabelTypography,
  render,
  screen
} from '@agharbi/storybook/common'

describe('InputLabelTypography Component: unit tests', () => {
  const testId = 'input-label-typography-testid'

  test('renders without crashing', () => {
    render(<InputLabelTypography testId={testId} label="label" />)
    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })

  test('does not render when label is empty', () => {
    render(<InputLabelTypography testId={testId} />)
    expect(screen.queryByTestId(testId)).not.toBeInTheDocument()
  })

  test('renders label text correctly', () => {
    const label = 'label'
    render(<InputLabelTypography testId={testId} label={label} />)
    expect(screen.getByText(label)).toBeInTheDocument()
  })

  test('applies correct properties to Typography', () => {
    render(<InputLabelTypography testId={testId} label="label" />)
    const element = screen.getByTestId(testId)

    expect(element).toHaveClass('sbl-leading-1-75')
    expect(element).toHaveClass('sbl-text-text')
    expect(element).toHaveClass('sbl-font-roboto')
    expect(element).toHaveClass('sbl-text-base')
  })
})
