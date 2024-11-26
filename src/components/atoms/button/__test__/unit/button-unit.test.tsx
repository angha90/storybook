import {
  buttonTestsCases,
  buttonTestsrenderAndCheckButtonClasses
} from '../utils'

describe('Button Component: unit tests', () => {
  buttonTestsCases.forEach(({ description, ...rest }) => {
    test(description, () =>
      buttonTestsrenderAndCheckButtonClasses({ description, ...rest })
    )
  })
})
