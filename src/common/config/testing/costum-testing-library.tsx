import { render } from '@testing-library/react'

import { UnstyledPrimeReactProvider } from '../../providers'

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: UnstyledPrimeReactProvider, ...options })

export * from '@testing-library/react'
export { customRender as render }
