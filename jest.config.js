// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  //   verbose: true,
  testEnvironment: "jsdom",
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};

module.exports = config;
