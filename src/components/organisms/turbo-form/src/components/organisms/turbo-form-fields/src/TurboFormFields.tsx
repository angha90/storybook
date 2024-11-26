import { v4 as uuidv4 } from 'uuid'

import { ITurboFormField, ITurboFormFieldsProps } from '../../../../interfaces'
import { TurboFormField } from '../../../molecules'

export const TurboFormFields = ({
  testId,
  fields = [],
  rhForm,
  className
}: ITurboFormFieldsProps) => {
  return (
    <div data-testid={testId} className={className}>
      {fields.map((field: ITurboFormField) => (
        <TurboFormField key={uuidv4()} field={field} rhForm={rhForm} />
      ))}
    </div>
  )
}
