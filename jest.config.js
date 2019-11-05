// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  rootDir: './src',
  setupFilesAfterEnv: ['jest-enzyme'],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "enzyme",
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  }
};
