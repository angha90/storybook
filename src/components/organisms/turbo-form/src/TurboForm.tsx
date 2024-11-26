import { TurboFormActions, TurboFormFields } from './components'
import { ITurboFormProps } from './interfaces'

export const TurboForm = ({
  testId,
  fields = [],
  actions = [],
  rhForm,
  onSubmit,
  styles = {}
}: ITurboFormProps) => {
  return (
    <form
      data-testid={testId}
      onSubmit={onSubmit}
      className={styles.container}
      autoComplete="off"
    >
      <TurboFormFields
        testId={`${testId}-fields`}
        fields={fields}
        rhForm={rhForm}
        className={styles.content}
      />
      <TurboFormActions
        testId={`${testId}-actions`}
        actions={actions}
        className={styles.actions}
      />
    </form>
  )
}
