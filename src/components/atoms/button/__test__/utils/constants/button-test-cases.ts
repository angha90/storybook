import { ITestButtonCase } from '../interfaces'

export const buttonTestsCases: ITestButtonCase[] = [
  {
    description: 'renders default Button',
    props: { 'data-testid': 'button-default' },
    expectedClasses: ['sbl-text-white']
  },
  {
    description: 'renders primary Button',
    props: { 'data-testid': 'button-primary', customize: { type: 'primary' } },
    expectedClasses: [
      'sbl-text-white',
      'sbl-bg-primary',
      'hover:sbl-bg-primary-75'
    ]
  },
  {
    description: 'renders secondary Button',
    props: {
      'data-testid': 'button-secondary',
      customize: { type: 'secondary' }
    },
    expectedClasses: [
      'sbl-text-primary',
      'sbl-bg-white',
      'sbl-border',
      'sbl-border-primary',
      'sbl-hover:bg-gray-100'
    ]
  },
  {
    description: 'renders secondary bordeless Button',
    props: {
      'data-testid': 'button-secondary-borderless',
      customize: { type: 'secondary-borderless' }
    },
    expectedClasses: [
      'sbl-text-primary',
      'sbl-bg-white',
      'sbl-hover:sbl-text-primary-75'
    ]
  },
  {
    description: 'renders tertiary Button',
    props: {
      'data-testid': 'button-tertiary',
      customize: { type: 'tertiary' }
    },
    expectedClasses: [
      'sbl-text-white',
      'sbl-bg-secondary',
      'sbl-hover:sbl-bg-secondary-over'
    ]
  },
  {
    description: 'renders quartenary Button',
    props: {
      'data-testid': 'button-quaternary',
      customize: { type: 'quaternary' }
    },
    expectedClasses: [
      'sbl-text-[#00D8AC]',
      'sbl-bg-white',
      'sbl-border',
      'sbl-border-secondary',
      'sbl-hover:sbl-bg-secondary',
      'sbl-hover:sbl-text-white'
    ]
  },
  {
    description: 'renders filter Button',
    props: {
      'data-testid': 'button-filter',
      customize: { type: 'filter' }
    },
    expectedClasses: [
      'sbl-border',
      'sbl-border-gray-300',
      '!sbl-text-gray-600',
      'sbl-bg-white',
      'sbl-hover:sbl-text-secondary-over'
    ]
  },
  {
    description: 'renders icon primary Button',
    props: {
      'data-testid': 'button-icon-primary',
      customize: { type: 'icon-primary' }
    },
    expectedClasses: [
      'sbl-text-white',
      'sbl-bg-primary',
      'sbl-hover:sbl-bg-primary-75'
    ]
  },
  {
    description: 'renders icon Button',
    props: {
      'data-testid': 'button-icon',
      customize: { type: 'icon' }
    },
    expectedClasses: [
      'sbl-border',
      'sbl-border-gray-300',
      'sbl-rounded',
      'sbl-focus:sbl-outline-none',
      'sbl-shadow',
      'sbl-hover:sbl-bg-gray-100'
    ]
  },
  {
    description: 'renders icon borderless Button',
    props: {
      'data-testid': 'button-icon-borderless',
      customize: { type: 'icon-borderless' }
    },
    expectedClasses: [
      'sbl-rounded',
      'sbl-focus:sbl-outline-none',
      'sbl-hover:sbl-bg-gray-100'
    ]
  },
  {
    description: 'renders sm Button',
    props: {
      'data-testid': 'button-sm',
      customize: { size: 'sm' }
    },
    expectedClasses: ['sbl-py-1', 'sbl-px-2']
  },
  {
    description: 'renders md Button',
    props: {
      'data-testid': 'button-md',
      customize: { size: 'md' }
    },
    expectedClasses: ['sbl-py-2', 'sbl-px-4']
  },
  {
    description: 'renders lg Button',
    props: {
      'data-testid': 'button-lg',
      customize: { size: 'lg' }
    },
    expectedClasses: ['sbl-py-3', 'sbl-px-6']
  },
  {
    description: 'renders xl Button',
    props: {
      'data-testid': 'button-xl',
      customize: { size: 'xl' }
    },
    expectedClasses: ['sbl-py-4', 'sbl-px-8']
  },
  {
    description: 'renders 2xl Button',
    props: {
      'data-testid': 'button-2xl',
      customize: { size: '2xl' }
    },
    expectedClasses: ['sbl-py-5', 'sbl-px-10']
  }
]
