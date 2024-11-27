import type { Meta, StoryObj } from '@storybook/react'

import { BoostForm } from '../src'
import { IBoostFormUseFormReturn } from '../src/interfaces'

import {
  defaultActions,
  defaultFields,
  defaultStyles,
  BoostFormDecoratorMeta,
  BoostFormDecoratorValidations
} from './utils'

const meta = {
  title: 'Organisms/BoostForm',
  component: BoostForm,
  tags: ['autodocs'],
  decorators: [BoostFormDecoratorMeta]
} satisfies Meta<typeof BoostForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    actions: defaultActions,
    fields: defaultFields,
    rhForm: {} as IBoostFormUseFormReturn,
    onSubmit: () => {},
    styles: defaultStyles
  }
}

export const Validations: Story = {
  decorators: [BoostFormDecoratorValidations],
  args: {
    actions: defaultActions,
    fields: defaultFields,
    rhForm: {} as IBoostFormUseFormReturn,
    onSubmit: () => {},
    styles: defaultStyles
  }
}
