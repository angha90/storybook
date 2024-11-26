import type { Meta, StoryObj } from '@storybook/react'

import { TurboForm } from '../src'
import { ITurboFormUseFormReturn } from '../src/interfaces'

import {
  defaultActions,
  defaultFields,
  defaultStyles,
  TurboFormDecoratorMeta,
  TurboFormDecoratorValidations
} from './utils'

const meta = {
  title: 'Organisms/TurboForm',
  component: TurboForm,
  tags: ['autodocs'],
  decorators: [TurboFormDecoratorMeta]
} satisfies Meta<typeof TurboForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    actions: defaultActions,
    fields: defaultFields,
    rhForm: {} as ITurboFormUseFormReturn,
    onSubmit: () => {},
    styles: defaultStyles
  }
}

export const Validations: Story = {
  decorators: [TurboFormDecoratorValidations],
  args: {
    actions: defaultActions,
    fields: defaultFields,
    rhForm: {} as ITurboFormUseFormReturn,
    onSubmit: () => {},
    styles: defaultStyles
  }
}
