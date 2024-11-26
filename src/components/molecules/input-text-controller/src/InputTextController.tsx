import { Controller } from 'react-hook-form'

import {
  InputErrorTypography,
  InputLabelTypography
} from '@agharbi/storybook/common'

import { InputText } from '../../../atoms'

import { IInputTextControllerProps } from './interfaces'

export const InputTextController = ({
  controller,
  root,
  label,
  input,
  error
}: IInputTextControllerProps) => {
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
          <InputText
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
