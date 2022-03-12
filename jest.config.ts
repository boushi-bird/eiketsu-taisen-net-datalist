import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/test-d/"],
};
export default config;
