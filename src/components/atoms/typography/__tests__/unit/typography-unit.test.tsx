import { render, screen } from '@agharbi/storybook/common'

import { Typography } from '../../src'

describe('Typography Component: unit tests', () => {
  const testId = 'typography-testid'
  test('renders without crashing', () => {
    render(<Typography testId={testId}>Test Text</Typography>)
    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })

  test('does not render when hide is true', () => {
    render(
      <Typography testId={testId} hide>
        Hidden Text
      </Typography>
    )
    expect(screen.queryByTestId(testId)).not.toBeInTheDocument()
  })

  test('renders with the correct HTML tag', () => {
    render(
      <Typography testId={testId} tag="h1">
        Heading Text
      </Typography>
    )
    const heading = screen.getByTestId(testId)
    expect(heading.tagName).toBe('H1')
  })

  test('applies the correct classes based on props', () => {
    render(
      <Typography
        testId={testId}
        color="sbl-text-blue"
        font="sbl-font-bold"
        size="sbl-text-lg"
        weight="sbl-font-medium"
        height="sbl-line-height"
        className="sbl-p-2"
      >
        Text
      </Typography>
    )
    const element = screen.getByTestId(testId)
    expect(element).toHaveClass('sbl-text-blue')
    expect(element).toHaveClass('sbl-font-bold')
    expect(element).toHaveClass('sbl-text-lg')
    expect(element).toHaveClass('sbl-font-medium')
    expect(element).toHaveClass('sbl-line-height')
  })

  test('renders children correctly', () => {
    render(<Typography testId={testId}>Children Text</Typography>)
    expect(screen.getByText('Children Text')).toBeInTheDocument()
  })
})
