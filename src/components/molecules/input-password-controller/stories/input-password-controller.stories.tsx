import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'

import { InputPasswordController } from '../src'

const meta: Meta<typeof InputPasswordController> = {
  title: 'Molecules/InputPasswordController',
  component: InputPasswordController,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const rhform = useForm()
      return (
        <Story
          args={{
            ...context.args,
            controller: { control: rhform.control, name: '' }
          }}
        />
      )
    }
  ]
}

export default meta
type Story = StoryObj<Partial<typeof meta>>

export const Default: Story = {
  args: {
    root: { className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto' }
  }
}

export const Label: Story = {
  args: {
    root: { className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto' },
    label: { text: 'Label' }
  }
}

export const Error: Story = {
  args: {
    root: { className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto' },
    label: { text: 'Label' },
    error: { text: 'El campo es obligatorio' }
  }
}
