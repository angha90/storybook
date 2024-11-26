import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './'
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  rootDir: './',
  moduleNameMapper: {
    '^@agharbi/storybook/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  preset: 'ts-jest',
  transformIgnorePatterns: [
    'node_modules/(?!nanoid)' // Añade nanoid para que Jest lo transforme
  ]
}

export default createJestConfig(config)
