import { ButtonPassThroughOptions } from 'primereact/button'
import { classNames } from 'primereact/utils'

import { IButtonPtProps } from '../interfaces'

export const buttonPt = ({
  type = 'primary',
  size = 'md'
}: IButtonPtProps): ButtonPassThroughOptions => {
  const isIconType = type.includes('icon')

  return {
    root: {
      className: classNames(
        'sbl-flex sbl-items-center sbl-gap-2 sbl-pointer sbl-rounded-md',
        {
          '': type === 'none',
          'sbl-text-white sbl-bg-primary hover:sbl-bg-primary-hover':
            type === 'primary',
          'sbl-text-primary sbl-bg-white sbl-border sbl-border-primary hover:sbl-bg-gray-100':
            type === 'secondary',
          'sbl-text-primary sbl-bg-white hover:sbl-bg-gray-100':
            type === 'secondary-borderless',
          'sbl-text-gray-600 sbl-bg-secondary hover:sbl-bg-gray-100':
            type === 'tertiary',
          'sbl-text-secondary sbl-bg-white sbl-border sbl-border-secondary hover:sbl-bg-gray-100 sbl-hover:sbl-text-white':
            type === 'quaternary',
          'sbl-text-secondary sbl-bg-white hover:sbl-bg-gray-100':
            type === 'quaternary-borderless',
          'sbl-border sbl-border-primary sbl-text-gray-600 sbl-bg-white hover:sbl-bg-gray-100':
            type === 'filter',
          'sbl-text-white sbl-bg-primary s':
            type === 'icon-primary',
          'sbl-border sbl-border-primary sbl-text-gray-600 sbl-rounded sbl-focus:sbl-outline-none sbl-shadow hover:sbl-bg-gray-100':
            type === 'icon',
          'sbl-rounded focus:sbl-outline-none sbl-text-gray-600 hover:sbl-bg-gray-100':
            type === 'icon-borderless'
        },
        {
          'sbl-p-1': isIconType && size === 'sm',
          'sbl-p-2': isIconType && size === 'md',
          'sbl-p-3': isIconType && size === 'lg',
          'sbl-p-4': isIconType && size === 'xl',
          'sbl-p-5': isIconType && size === '2xl',
          'sbl-py-1 sbl-px-2 ': !isIconType && size === 'sm',
          'sbl-py-2 sbl-px-4': !isIconType && size === 'md',
          'sbl-py-3 sbl-px-6 ': !isIconType && size === 'lg',
          'sbl-py-4 sbl-px-8 ': !isIconType && size === 'xl',
          'sbl-py-5 sbl-px-10 ': !isIconType && size === '2xl'
        }
      )
    }
  }
}
