import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor
} from '@agharbi/storybook/common'

import { BoostForm } from '../../src'
import {
  IBoostFormTestValues,
  BoostFormButtonGuardarTestId,
  BoostFormInputEmailTestId,
  BoostFormInputPasswordTestId,
  BoostFormInputUserTestId,
  BoostFormTestDefaultProps,
  BoostFormTestsValidationsSchema
} from '../utils'

describe('BoostForm Component: integration tests', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})
  })

  test('submits empty form witout validations', async () => {
    const { result } = renderHook(() => useForm())
    const defaultProps = BoostFormTestDefaultProps({ rhForm: result.current })
    render(<BoostForm {...defaultProps} />)
    const submitButton = screen.getByTestId(BoostFormButtonGuardarTestId)
    fireEvent.click(submitButton)
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Success: payload = {}')
    })
  })

  test('submits filled form witout validations', async () => {
    const { result } = renderHook(() => useForm())
    const defaultProps = BoostFormTestDefaultProps({ rhForm: result.current })
    render(<BoostForm {...defaultProps} />)
    const userInput = screen.getByTestId(`${BoostFormInputUserTestId}-input`)
    const emailInput = screen.getByTestId(`${BoostFormInputEmailTestId}-input`)
    const passwordInput = screen.getByTestId(
      `${BoostFormInputPasswordTestId}-input`
    )
    fireEvent.change(userInput, { target: { value: 'TestUser' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    const submitButton = screen.getByTestId(BoostFormButtonGuardarTestId)
    fireEvent.click(submitButton)
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        'Success: payload = {"user":"TestUser","email":"test@example.com","password":"password123"}'
      )
    })
  })

  test('submits empty form with validations', async () => {
    const { result } = renderHook(() =>
      useForm<IBoostFormTestValues>({
        resolver: yupResolver(BoostFormTestsValidationsSchema)
      })
    )
    const defaultProps = BoostFormTestDefaultProps({ rhForm: result.current })

    render(<BoostForm {...defaultProps} />)
    const emailInput = screen.getByTestId(`${BoostFormInputEmailTestId}-input`)
    fireEvent.change(emailInput, { target: { value: 'invalid email' } })

    const submitButton = screen.getByTestId(BoostFormButtonGuardarTestId)
    fireEvent.click(submitButton)
    await waitFor(() => {
      const userError = result.current.formState.errors.user?.message
      const emailError = result.current.formState.errors.email?.message
      const passwordError = result.current.formState.errors.password?.message
      expect(userError).toBe('El campo es obligatorio')
      expect(emailError).toBe('El email no es válido')
      expect(passwordError).toBe('El campo es obligatorio')
    })
  })

  test('submits filled form with validations', async () => {
    const { result } = renderHook(() => useForm())
    const defaultProps = BoostFormTestDefaultProps({ rhForm: result.current })
    render(<BoostForm {...defaultProps} />)
    const userInput = screen.getByTestId(`${BoostFormInputUserTestId}-input`)
    const emailInput = screen.getByTestId(`${BoostFormInputEmailTestId}-input`)
    const passwordInput = screen.getByTestId(
      `${BoostFormInputPasswordTestId}-input`
    )
    fireEvent.change(userInput, { target: { value: 'TestUser' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    const submitButton = screen.getByTestId(BoostFormButtonGuardarTestId)
    fireEvent.click(submitButton)
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        'Success: payload = {"user":"TestUser","email":"test@example.com","password":"password123"}'
      )
    })
  })
})
