import {
  ButtonPassThroughMethodOptions,
  ButtonPassThroughOptions
} from 'primereact/button'
import { classNames } from 'primereact/utils'

export const primereactProviderButtonPt: ButtonPassThroughOptions = {
  root: ({ context }: ButtonPassThroughMethodOptions) => ({
    className: classNames(
      'sbl-items-center sbl-cursor-pointer sbl-inline-flex sbl-overflow-hidden sbl-relative sbl-select-none sbl-text-center sbl-align-bottom',
      'sbl-transition sbl-duration-200 sbl-ease-in-out',
      'focus:sbl-outline-none focus:sbl-outline-offset-0',
      {
        'sbl-opacity-40 sbl-pointer-events-none sbl-cursor-default':
          context.disabled
      }
    )
  }),
  label: ({ props }: ButtonPassThroughMethodOptions) => ({
    className: classNames(
      'sbl-flex-1',
      'sbl-duration-200',
      'sbl-font-bold',
      {
        'hover:sbl-underline': props.link
      },
      { 'sbl-invisible sbl-w-0': props.label === null }
    )
  }),
  icon: ({ props }: ButtonPassThroughMethodOptions) => ({
    className: classNames('sbl-mx-0', {
      'sbl-mr-2': props.iconPos === 'left' && props.label != null,
      'sbl-ml-2 sbl-order-1': props.iconPos === 'right' && props.label != null,
      'sbl-mb-2': props.iconPos === 'top' && props.label != null,
      'sbl-mt-2 sbl-order-2': props.iconPos === 'bottom' && props.label != null
    })
  }),
  loadingIcon: ({ props }: ButtonPassThroughMethodOptions) => ({
    className: classNames('sbl-mx-0', {
      'sbl-mr-2':
        props.loading && props.iconPos === 'left' && props.label != null,
      'sbl-ml-2 sbl-order-1':
        props.loading && props.iconPos === 'right' && props.label != null,
      'sbl-mb-2':
        props.loading && props.iconPos === 'top' && props.label != null,
      'sbl-mt-2 sbl-order-2':
        props.loading && props.iconPos === 'bottom' && props.label != null
    })
  }),
  badge: ({ props }: ButtonPassThroughMethodOptions) => ({
    className: classNames({
      'sbl-ml-2 sbl-w-4 sbl-h-4 sbl-leading-none sbl-flex sbl-items-center sbl-justify-center':
        props.badge
    })
  })
}
