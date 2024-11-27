import { useForm } from 'react-hook-form'

import {
  render,
  renderHook,
  screen
} from '@agharbi/storybook/common'

import { BoostForm } from '../../src'
import {
  BoostFormTestDefaultProps,
  BoostFormTestFieldsIds,
  BoostFormTestStylesCases
} from '../utils'

describe('BoostForm Component: unit tests', () => {
  const { result } = renderHook(() => useForm())

  const defaultProps = BoostFormTestDefaultProps({ rhForm: result.current })

  test('renders form with correct styles', () => {
    render(<BoostForm {...defaultProps} />)

    BoostFormTestStylesCases.forEach(({ testId, expectedClasses }) => {
      const form = screen.getByTestId(testId)
      expect(form).toHaveClass(expectedClasses)
    })
  })

  test('renders form fields', () => {
    render(<BoostForm {...defaultProps} />)

    BoostFormTestFieldsIds.forEach((testId) => {
      const element = screen.getByTestId(testId)
      expect(element).toBeInTheDocument()
    })
  })

  test('renders form actions', () => {
    render(<BoostForm {...defaultProps} />)

    const formActionGurdar = screen.getByTestId('form-action-guardar')

    expect(formActionGurdar).toBeInTheDocument()
  })
})
