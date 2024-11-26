import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../src'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    customize: {
      type: 'primary'
    },
    label: 'Primary'
  }
}

export const Secondary: Story = {
  args: {
    customize: {
      type: 'secondary'
    },
    label: 'Secondary'
  }
}

export const SecondaryBordeless: Story = {
  args: {
    customize: {
      type: 'secondary-borderless'
    },
    label: 'Secondary bordeless'
  }
}

export const Tertiary: Story = {
  args: {
    customize: {
      type: 'tertiary'
    },
    label: 'Tertiary'
  }
}

export const Quaternary: Story = {
  args: {
    customize: {
      type: 'quaternary'
    },
    label: 'Quaternary'
  }
}

export const QuaternaryBordeless: Story = {
  args: {
    customize: {
      type: 'quaternary-borderless'
    },
    label: 'Quaternary bordeless'
  }
}

export const IconPrimary: Story = {
  args: {
    customize: {
      type: 'icon-primary'
    },
    label: 'Icon primary'
  }
}

export const IconBordeless: Story = {
  args: {
    customize: {
      type: 'icon-borderless'
    },
    label: 'Icon bordeless'
  }
}

export const Icon: Story = {
  args: {
    customize: {
      type: 'icon'
    },
    label: 'Icon'
  }
}

export const Filter: Story = {
  args: {
    customize: {
      type: 'filter'
    },
    label: 'Filter'
  }
}

export const None: Story = {
  args: {
    customize: {
      type: 'none'
    },
    label: 'None'
  }
}

export const SizeSM: Story = {
  args: {
    customize: {
      type: 'primary',
      size: 'sm'
    },
    label: 'Size sm'
  }
}

export const SizeMD: Story = {
  args: {
    customize: {
      type: 'primary',
      size: 'md'
    },
    label: 'Size md'
  }
}

export const SizeLG: Story = {
  args: {
    customize: {
      type: 'primary',
      size: 'lg'
    },
    label: 'Size lg'
  }
}

export const SizeXL: Story = {
  args: {
    customize: {
      type: 'primary',
      size: 'xl'
    },
    label: 'Size xl'
  }
}

export const Size2XL: Story = {
  args: {
    customize: {
      type: 'primary',
      size: '2xl'
    },
    label: 'Size 2xl'
  }
}
