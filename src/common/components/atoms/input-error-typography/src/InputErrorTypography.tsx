import { Typography } from '@agharbi/storybook/components'

import { IInputErrorTypographyProps } from './interfaces'

export const InputErrorTypography = ({
  label,
  testId
}: IInputErrorTypographyProps) => {
  return (
    <Typography
      testId={testId}
      font="sbl-font-roboto"
      weight="sbl-font-normal"
      size="sbl-text-xs"
      color="sbl-text-danger"
      hide={!label}
    >
      {label}
    </Typography>
  )
}
