import { v4 as uuidv4 } from 'uuid'

import { IBoostFormField, IBoostFormFieldsProps } from '../../../../interfaces'
import { BoostFormField } from '../../../molecules'

export const BoostFormFields = ({
  testId,
  fields = [],
  rhForm,
  className
}: IBoostFormFieldsProps) => {
  return (
    <div data-testid={testId} className={className}>
      {fields.map((field: IBoostFormField) => (
        <BoostFormField key={uuidv4()} field={field} rhForm={rhForm} />
      ))}
    </div>
  )
}
