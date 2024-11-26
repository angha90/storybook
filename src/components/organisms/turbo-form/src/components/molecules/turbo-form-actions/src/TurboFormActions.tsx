import { v4 as uuidv4 } from 'uuid'

import { Button } from '@agharbi/storybook/components/atoms'

import {
  ITurboFormAction,
  ITurboFormActionsProps
} from '../../../../interfaces'

export const TurboFormActions = ({
  testId,
  actions = [],
  className
}: ITurboFormActionsProps) => {
  return (
    <div data-testid={testId} className={className}>
      {actions.map((action: ITurboFormAction) => (
        <Button key={uuidv4()} {...action} />
      ))}
    </div>
  )
}
