import { ITestInputTextCase } from '../interfaces'

export const inputTextTestsCases: ITestInputTextCase[] = [
  {
    description: 'renders with default styles',
    props: {},
    expectedClasses:
      'sbl-h-10 sbl-m-0 sbl-w-full sbl-font-sans sbl-text-gray-600 sbl-bg-white sbl-border sbl-transition-colors sbl-duration-200 sbl-appearance-none sbl-rounded-lg'
  },
  {
    description: "applies invalid styles when 'invalid' prop is true",
    props: { invalid: true },
    expectedClasses: 'sbl-border-danger sbl-border-[1px] sbl-rounded'
  },
  {
    description: "applies disabled styles when 'disabled' prop is true",
    props: { disabled: true },
    expectedClasses:
      'sbl-border-gray-300 sbl-opacity-60 sbl-select-none sbl-pointer-events-none sbl-cursor-default'
  },
  {
    description: "applies large size styles when 'size' prop is large",
    props: { size: 'large' },
    expectedClasses: 'sbl-text-lg sbl-px-4 sbl-py-4'
  },
  {
    description: "applies small size styles when 'size' prop is small",
    props: { size: 'small' },
    expectedClasses: 'sbl-text-xs sbl-px-2 sbl-py-2'
  }
]
