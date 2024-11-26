import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor
} from '@agharbi/storybook/common'

import { TurboForm } from '../../src'
import {
  ITurboFormTestValues,
  turboFormButtonGuardarTestId,
  turboFormInputEmailTestId,
  turboFormInputPasswordTestId,
  turboFormInputUserTestId,
  turboFormTestDefaultProps,
  turboFormTestsValidationsSchema
} from '../utils'

describe('TurboForm Component: integration tests', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {})
  })

  test('submits empty form witout validations', async () => {
    const { result } = renderHook(() => useForm())
    const defaultProps = turboFormTestDefaultProps({ rhForm: result.current })
    render(<TurboForm {...defaultProps} />)
    const submitButton = screen.getByTestId(turboFormButtonGuardarTestId)
    fireEvent.click(submitButton)
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Success: payload = {}')
    })
  })

  test('submits filled form witout validations', async () => {
    const { result } = renderHook(() => useForm())
    const defaultProps = turboFormTestDefaultProps({ rhForm: result.current })
    render(<TurboForm {...defaultProps} />)
    const userInput = screen.getByTestId(`${turboFormInputUserTestId}-input`)
    const emailInput = screen.getByTestId(`${turboFormInputEmailTestId}-input`)
    const passwordInput = screen.getByTestId(
      `${turboFormInputPasswordTestId}-input`
    )
    fireEvent.change(userInput, { target: { value: 'TestUser' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    const submitButton = screen.getByTestId(turboFormButtonGuardarTestId)
    fireEvent.click(submitButton)
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        'Success: payload = {"user":"TestUser","email":"test@example.com","password":"password123"}'
      )
    })
  })

  test('submits empty form with validations', async () => {
    const { result } = renderHook(() =>
      useForm<ITurboFormTestValues>({
        resolver: yupResolver(turboFormTestsValidationsSchema)
      })
    )
    const defaultProps = turboFormTestDefaultProps({ rhForm: result.current })

    render(<TurboForm {...defaultProps} />)
    const emailInput = screen.getByTestId(`${turboFormInputEmailTestId}-input`)
    fireEvent.change(emailInput, { target: { value: 'invalid email' } })

    const submitButton = screen.getByTestId(turboFormButtonGuardarTestId)
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
    const defaultProps = turboFormTestDefaultProps({ rhForm: result.current })
    render(<TurboForm {...defaultProps} />)
    const userInput = screen.getByTestId(`${turboFormInputUserTestId}-input`)
    const emailInput = screen.getByTestId(`${turboFormInputEmailTestId}-input`)
    const passwordInput = screen.getByTestId(
      `${turboFormInputPasswordTestId}-input`
    )
    fireEvent.change(userInput, { target: { value: 'TestUser' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(passwordInput, { target: { value: 'password123' } })
    const submitButton = screen.getByTestId(turboFormButtonGuardarTestId)
    fireEvent.click(submitButton)
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        'Success: payload = {"user":"TestUser","email":"test@example.com","password":"password123"}'
      )
    })
  })
})
