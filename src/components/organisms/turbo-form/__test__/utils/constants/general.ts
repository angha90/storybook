import { turboFormTestId } from './test-ids'

export const turboFormTestDefaultActions = [
  {
    'data-testid': 'form-action-guardar',
    label: 'Guardar',
    className: 'sbl-w-full sm:sbl-w-auto'
  }
]

export const turboFormTestDefaultStyles = {
  container:
    'sbl-grid sbl-gap-4 sm:sbl-w-1/2 sbl-m-auto sbl-bg-blue-50 sbl-p-4 sbl-rounded-xl',
  content: 'sbl-grid sbl-gap-2',
  actions: 'sbl-flex sm:sbl-justify-end'
}

export const turboFormTestFieldsIds = [
  'form-field-user-input',
  'form-field-email-input',
  'form-field-password-input'
]

export const turboFormTestStylesCases = [
  {
    testId: turboFormTestId,
    expectedClasses:
      'sbl-grid sbl-gap-4 sm:sbl-w-1/2 sbl-m-auto sbl-bg-blue-50 sbl-p-4 sbl-rounded-xl'
  },
  {
    testId: `${turboFormTestId}-fields`,
    expectedClasses: 'sbl-grid sbl-gap-2'
  },
  {
    testId: `${turboFormTestId}-actions`,
    expectedClasses: 'sbl-flex sm:sbl-justify-end'
  }
]
