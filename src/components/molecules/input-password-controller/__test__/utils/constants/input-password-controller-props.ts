import { useForm } from 'react-hook-form'

import { renderHook } from '@agharbi/storybook/common'

import { IInputPasswordControllerProps } from '../../../src/interfaces'

const { result } = renderHook(() => useForm())

export const inputPasswordControllerTestsDefaultProps: IInputPasswordControllerProps =
  {
    controller: {
      name: 'input-password-controller',
      control: result.current.control
    },
    root: {
      'data-testid': 'input-password-controller-test-id'
    }
  }
