export const silenceCssError = () => {
  jest.spyOn(global.console, 'error').mockImplementation((message) => {
    if (
      typeof message?.message === 'string' &&
      !message?.message?.includes('Could not parse CSS stylesheet')
    ) {
      global.console.warn(message)
    }
  })
}

export const silencePropsWarn = () => {
  jest.spyOn(console, 'warn').mockImplementation((message) => {
    if (
      typeof message === 'string' &&
      !message.includes('React does not recognize')
    ) {
      console.warn(message)
    }
  })
}
