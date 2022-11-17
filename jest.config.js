module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  moduleFileExtensions: ['ts', 'js', 'json', 'node', 'tsx'],
  testMatch: ['**/_test/**/*.test.ts'],
  moduleDirectories: [
    'node_modules',
    '<rootDir>/src',
  ],
};
