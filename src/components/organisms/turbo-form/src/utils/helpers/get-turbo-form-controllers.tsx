import {
  InputPasswordController,
  InputTextController
} from '@agharbi/storybook/components/molecules'

import { IGetTurboFormControllersProps } from '../../interfaces'

export const getTurboFormControllers = ({
  field,
  rhForm
}: IGetTurboFormControllersProps) => {
  const name = field.controller.controller?.name as string
  const controllers = {
    text: (
      <InputTextController
        root={{ 'data-testid': field.controller.root?.['data-testid'] }}
        controller={{
          name,
          control: rhForm?.control
        }}
        label={field.controller.label}
        error={{ text: rhForm?.formState?.errors?.[name]?.message as string }}
      />
    ),
    password: (
      <InputPasswordController
        root={{ 'data-testid': field.controller.root?.['data-testid'] }}
        controller={{
          name,
          control: rhForm?.control
        }}
        label={field.controller.label}
        error={{ text: rhForm?.formState?.errors?.[name]?.message as string }}
      />
    )
  }

  return controllers[field.type as keyof typeof controllers]
}
