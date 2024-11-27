import { yupResolver } from '@hookform/resolvers/yup'
import type { StoryContext, StoryFn } from '@storybook/react'
import { FieldValues, useForm } from 'react-hook-form'

import { validationsSchema } from '../constants'

export const BoostFormDecoratorValidations = (
  Story: StoryFn,
  context: StoryContext
) => {
  const rhForm = useForm({
    resolver: yupResolver(validationsSchema)
  })
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
