import {
  inputTextTestsCases,
  inputTextTestsrenderAndCheckClasses
} from '../utils'

describe('InputText component: unit tests', () => {
  inputTextTestsCases.forEach(({ description, ...rest }) => {
    test(description, () =>
      inputTextTestsrenderAndCheckClasses({ description, ...rest })
    )
  })
})
