export const testEnvironment = 'jsdom';
export const testPathIgnorePatters = ['/node_modules/', '/.next'];
export const collectCoverage = true;
export const collectCoverageFrom = ['src/**/*.ts(x)'];
export const setupFilesAfterEnv = ['<rootDir>/.jest/setup.ts'];