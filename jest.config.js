// jest.config.js
const {defaults} = require('jest-config');
module.exports = {

    moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'tsx'],
    collectCoverageFrom: [
        '**/src/*test.{js,jsx}'
    ],
    modulePathIgnorePatterns: ['.example/']
};
