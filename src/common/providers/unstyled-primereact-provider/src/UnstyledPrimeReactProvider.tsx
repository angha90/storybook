import { PrimeReactProvider } from 'primereact/api'

import { primereactProviderPt } from '@agharbi/storybook/common'

import { fontItim, fontRoboto } from '../../../assets'

export const UnstyledPrimeReactProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: primereactProviderPt }}>
      <div className={`${fontRoboto.variable} ${fontItim.variable}`}>
        {children}
      </div>
    </PrimeReactProvider>
  )
}
