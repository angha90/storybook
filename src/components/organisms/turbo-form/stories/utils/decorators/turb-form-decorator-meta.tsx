import type { StoryContext, StoryFn } from '@storybook/react'
import { FieldValues, useForm } from 'react-hook-form'

export const TurboFormDecoratorMeta = (
  Story: StoryFn,
  context: StoryContext
) => {
  const rhForm = useForm()
  const handleSubmit = (data: FieldValues) => {
    alert(`Success: payload = ${JSON.stringify(data)}`)
  }
  return (
    <Story
      args={{
        ...context.args,
        rhForm,
        onSubmit: rhForm.handleSubmit(handleSubmit)
      }}
    />
  )
}
