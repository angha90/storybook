import { IBoostFormFieldProps } from '../../../../interfaces'
import { getBoostFormControllers } from '../../../../utils'

export const BoostFormField = ({ field, rhForm }: IBoostFormFieldProps) => {
  const component = getBoostFormControllers({
    field,
    rhForm
  })

  return <>{component}</>
}
