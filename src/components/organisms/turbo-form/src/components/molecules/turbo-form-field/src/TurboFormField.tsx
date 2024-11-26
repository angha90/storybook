import { ITurboFormFieldProps } from '../../../../interfaces'
import { getTurboFormControllers } from '../../../../utils'

export const TurboFormField = ({ field, rhForm }: ITurboFormFieldProps) => {
  const component = getTurboFormControllers({
    field,
    rhForm
  })

  return <>{component}</>
}
