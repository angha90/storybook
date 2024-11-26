import { PrimeReactPTOptions } from 'primereact/api'
import Tailwind from 'primereact/passthrough/tailwind'

import {
  primereactProviderButtonPt,
  primereactProviderInputPasswordPt,
  primereactProviderInputTextPt
} from '../primereact-components-pts'

export const primereactProviderPt: PrimeReactPTOptions = {
  ...Tailwind,
  button: primereactProviderButtonPt,
  inputtext: primereactProviderInputTextPt,
  password: primereactProviderInputPasswordPt
}
