import {
  PasswordPassThroughMethodOptions,
  PasswordPassThroughOptions
} from 'primereact/password'
import { classNames } from 'primereact/utils'

export const primereactProviderInputPasswordPt: PasswordPassThroughOptions = {
  root: ({ props }: PasswordPassThroughMethodOptions) => ({
    className: classNames('sbl-inline-flex sbl-relative sbl-w-full', {
      'sbl-opacity-60 sbl-select-none sbl-pointer-events-none sbl-cursor-default':
        props.disabled
    })
  }),
  iconField: {
    root: {
      className: 'sbl-w-full'
    }
  },
  panel: () => ({
    className:
      'sbl-p-5 sbl-bg-white sbl-text-gray-700 sbl-shadow-md sbl-rounded-md'
  }),
  meter: {
    className: 'sbl-mb-2 sbl-bg-gray-300 sbl-h-3'
  },
  meterLabel: ({ state, props }: PasswordPassThroughMethodOptions) => ({
    className: classNames(
      'sbl-transition-width sbl-duration-1000 sbl-ease-in-out sbl-h-full',
      {
        'sbl-bg-red-500': state.meter?.strength == 'weak',
        'sbl-bg-orange-500': state.meter?.strength == 'medium',
        'sbl-bg-green-500': state.meter?.strength == 'strong'
      },
      { 'sbl-pr-[2.5rem]': props.toggleMask }
    )
  }),
  showIcon: {
    className: classNames(
      'sbl-absolute sbl-top-1/2 -sbl-mt-2',
      'sbl-right-3 sbl-text-gray-600 sbl-cursor-pointer'
    )
  },
  hideIcon: {
    className: classNames(
      'sbl-absolute sbl-top-1/2 -sbl-mt-2',
      'sbl-right-3 sbl-text-gray-600 sbl-cursor-pointer'
    )
  }
}
