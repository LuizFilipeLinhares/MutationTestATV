/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
export default {
  mutate: [
    "src/**/*.js",
    "!src/**/*.spec.js",
    "!src/**/__tests__/**"
  ],
  testRunner: "jest",
  reporters: ["progress", "clear-text", "html"],
  coverageAnalysis: "off",
  jest: {
    projectType: "custom",
    configFile: "jest.config.js",
    enableFindRelatedTests: true
  },
  mutateOnly: true,
  timeoutMS: 6000
};
