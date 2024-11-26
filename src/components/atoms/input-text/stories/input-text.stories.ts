import type { Meta, StoryObj } from '@storybook/react'

import { InputText } from '../src'

const meta = {
  title: 'Atoms/InputText',
  component: InputText,
  tags: ['autodocs']
} satisfies Meta<typeof InputText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    customize: {
      className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto'
    },
    className: 'sbl-w-1/2',
    placeholder: 'Enter a text here'
  }
}

export const Invalid: Story = {
  args: {
    customize: {
      className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto'
    },
    className: 'sbl-w-1/2',
    placeholder: 'Enter a text here',
    invalid: true
  }
}

export const Disabled: Story = {
  args: {
    customize: {
      className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto'
    },
    className: 'sbl-w-1/2',
    placeholder: 'Enter a text here',
    disabled: true
  }
}

export const Small: Story = {
  args: {
    customize: {
      className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto'
    },
    className: 'sbl-w-1/2',
    placeholder: 'Enter a text here',
    size: 'small'
  }
}

export const Large: Story = {
  args: {
    customize: {
      className: 'sbl-w-full sm:sbl-w-1/2 sbl-m-auto'
    },
    className: 'sbl-w-1/2',
    placeholder: 'Enter a text here',
    size: 'large'
  }
}
