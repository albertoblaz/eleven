module.exports = {
    testEnvironment: 'jsdom',
    name: 'eleven',
    displayName: 'eleven',
    roots: ['<rootDir>'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    ],
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$':
            '<rootDir>/node_modules/jest-css-modules',
    },
    testPathIgnorePatterns: ['/node_modules/'],
}
