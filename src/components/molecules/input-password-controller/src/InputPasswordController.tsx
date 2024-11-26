import { Controller } from 'react-hook-form'

import {
  InputErrorTypography,
  InputLabelTypography
} from '@agharbi/storybook/common'

import { InputPassword } from '../../../atoms'

import { IInputPasswordControllerProps } from './interfaces'

export const InputPasswordController = ({
  controller,
  root,
  label,
  input,
  error
}: IInputPasswordControllerProps) => {
  const rootTestId = root?.['data-testid']
  return (
    <div data-testid={rootTestId} className={root?.className}>
      <InputLabelTypography
        testId={rootTestId ? `${rootTestId}-label` : ''}
        label={label?.text}
      />
      <Controller
        name={controller.name}
        control={controller.control}
        render={({ field }) => (
          <InputPassword
            {...{ ...input, ...field, invalid: !!error?.text }}
            data-testid={rootTestId ? `${rootTestId}-input` : ''}
          />
        )}
      />
      <InputErrorTypography
        testId={rootTestId ? `${rootTestId}-error` : ''}
        label={error?.text}
      />
    </div>
  )
}
