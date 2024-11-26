import {
  InputTextPassThroughMethodOptions,
  InputTextPassThroughOptions
} from 'primereact/inputtext'
import { classNames } from 'primereact/utils'

export const primereactProviderInputTextPt: InputTextPassThroughOptions = {
  root: ({ props, context }: InputTextPassThroughMethodOptions) => ({
    autoComplete: 'off',
    className: classNames(
      'sbl-h-10 sbl-m-0 sbl-w-full',
      'sbl-font-sans sbl-text-gray-600 sbl-bg-white sbl-border sbl-transition-colors sbl-duration-200 sbl-appearance-none sbl-rounded-lg focus:sbl-shadow-[0_0_0_0.2rem_rgba(176,249,168,1)] focus:sbl-outline-0',
      {
        'sbl-border-primary hover:sbl-border-primary-hover':
          !props.invalid && !context.disabled,
        'sbl-border-gray-300 sbl-opacity-60 sbl-select-none sbl-pointer-events-none sbl-cursor-default':
          context.disabled,
        'sbl-border-danger sbl-border-[1px] sbl-rounded':
          props.invalid && !context.disabled
      },
      {
        'sbl-text-lg sbl-px-4 sbl-py-4': props.size === 'large',
        'sbl-text-xs sbl-px-2 sbl-py-2': props.size === 'small',
        'sbl-p-3 sbl-text-base': props.size == null
      }
    )
  })
}
