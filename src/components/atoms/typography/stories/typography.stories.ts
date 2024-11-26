import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../src'

const meta = {
  title: 'Atoms/Typography',
  component: Typography,
  tags: ['autodocs']
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Typography'
  }
}

export const Font: Story = {
  args: {
    children: 'Typography',
    font: 'sbl-font-itim'
  }
}

export const Size: Story = {
  args: {
    children: 'Typography',
    size: 'sbl-text-xl'
  }
}

export const Weight: Story = {
  args: {
    children: 'Typography',
    weight: 'sbl-font-bold'
  }
}

export const Color: Story = {
  args: {
    children: 'Typography',
    color: 'sbl-text-secondary'
  }
}

export const LineHeight: Story = {
  args: {
    children: 'Typography',
    height: 'sbl-leading-2-5'
  }
}

export const Tag: Story = {
  args: {
    children: 'Typography',
    tag: 'strong'
  }
}

export const OthersStyles: Story = {
  args: {
    children: 'Typography',
    color: 'sbl-text-danger',
    font: 'sbl-font-itim',
    className: 'sbl-bg-blue-200 sbl-p-3 sbl-rounded-xl'
  }
}
