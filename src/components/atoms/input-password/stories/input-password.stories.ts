import type { Meta, StoryObj } from '@storybook/react'

import { InputPassword } from '../src/InputPassword'

const meta = {
  title: 'Atoms/InputPassword',
  component: InputPassword,
  tags: ['autodocs']
} satisfies Meta<typeof InputPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    customize: {
      className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto'
    },
    className: 'sbl-w-full'
  }
}

export const NoFeedback: Story = {
  args: {
    customize: {
      className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto'
    },
    className: 'sbl-w-full',
    feedback: false
  }
}

export const ToggleMask: Story = {
  args: {
    customize: {
      className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto'
    },
    className: 'sbl-w-full',
    toggleMask: true
  }
}

export const Invalid: Story = {
  args: {
    customize: {
      className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto'
    },
    className: 'sbl-w-full',
    toggleMask: true,
    invalid: true
  }
}

export const Disabled: Story = {
  args: {
    customize: {
      className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto'
    },
    className: 'sbl-w-full',
    toggleMask: true,
    disabled: true
  }
}
