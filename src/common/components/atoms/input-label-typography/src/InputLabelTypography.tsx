import { Typography } from '@agharbi/storybook/components'

import { IInputLabelTypographyProps } from './interfaces'

export const InputLabelTypography = ({
  label,
  testId
}: IInputLabelTypographyProps) => {
  return (
    <Typography
      testId={testId}
      height="sbl-leading-1-75"
      color="sbl-text-text"
      font="sbl-font-roboto"
      size="sbl-text-base"
      hide={!label}
    >
      {label}
    </Typography>
  )
}
