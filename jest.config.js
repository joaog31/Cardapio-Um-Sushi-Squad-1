module.exports = {
  preset: 'ts-jest',
  jestEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  coverageDirectory: 'coverage',
  collectCoverage: true,
  coverageReporters: ['html', 'text', 'lcov'],
};