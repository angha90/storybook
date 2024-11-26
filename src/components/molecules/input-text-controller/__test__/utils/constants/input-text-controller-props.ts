import { useForm } from 'react-hook-form'

import { renderHook } from '@agharbi/storybook/common'

import { IInputTextControllerProps } from '../../../src'

const { result } = renderHook(() => useForm())

export const inputTextControllerTestsDefaultProps: IInputTextControllerProps = {
  controller: {
    name: 'input-text-controller',
    control: result.current.control
  },
  root: {
    'data-testid': 'input-text-controller-test-id'
  }
}
