import { useForm } from 'react-hook-form'

import {
  render,
  renderHook,
  screen
} from '@agharbi/storybook/common'

import { TurboForm } from '../../src'
import {
  turboFormTestDefaultProps,
  turboFormTestFieldsIds,
  turboFormTestStylesCases
} from '../utils'

describe('TurboForm Component: unit tests', () => {
  const { result } = renderHook(() => useForm())

  const defaultProps = turboFormTestDefaultProps({ rhForm: result.current })

  test('renders form with correct styles', () => {
    render(<TurboForm {...defaultProps} />)

    turboFormTestStylesCases.forEach(({ testId, expectedClasses }) => {
      const form = screen.getByTestId(testId)
      expect(form).toHaveClass(expectedClasses)
    })
  })

  test('renders form fields', () => {
    render(<TurboForm {...defaultProps} />)

    turboFormTestFieldsIds.forEach((testId) => {
      const element = screen.getByTestId(testId)
      expect(element).toBeInTheDocument()
    })
  })

  test('renders form actions', () => {
    render(<TurboForm {...defaultProps} />)

    const formActionGurdar = screen.getByTestId('form-action-guardar')

    expect(formActionGurdar).toBeInTheDocument()
  })
})
