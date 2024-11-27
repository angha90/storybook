import { v4 as uuidv4 } from 'uuid'

import { Button } from '@agharbi/storybook/components/atoms'

import {
  IBoostFormAction,
  IBoostFormActionsProps
} from '../../../../interfaces'

export const BoostFormActions = ({
  testId,
  actions = [],
  className
}: IBoostFormActionsProps) => {
  return (
    <div data-testid={testId} className={className}>
      {actions.map((action: IBoostFormAction) => (
        <Button key={uuidv4()} {...action} />
      ))}
    </div>
  )
}
