import { BoostFormActions, BoostFormFields } from './components'
import { IBoostFormProps } from './interfaces'

export const BoostForm = ({
  testId,
  fields = [],
  actions = [],
  rhForm,
  onSubmit,
  styles = {}
}: IBoostFormProps) => {
  return (
    <form
      data-testid={testId}
      onSubmit={onSubmit}
      className={styles.container}
      autoComplete="off"
    >
      <BoostFormFields
        testId={`${testId}-fields`}
        fields={fields}
        rhForm={rhForm}
        className={styles.content}
      />
      <BoostFormActions
        testId={`${testId}-actions`}
        actions={actions}
        className={styles.actions}
      />
    </form>
  )
}
