import * as yup from 'yup'

export const turboFormTestsValidationsSchema = yup.object({
  user: yup.string().required('El campo es obligatorio'),
  email: yup
    .string()
    .email('El email no es válido')
    .required('El campo es obligatorio'),
  password: yup.string().required('El campo es obligatorio')
})
