# micro-library

front-end devs share toys.

## Features

- [x] Setup
- [x] Lint
- [x] Test
- [x] Babel - transpile code from `cmj` to `esm`
- [ ] Webpack - build - npm pack
- [ ] CI
- [ ] Test Coverage
- [ ] Git hooks
- [ ] Publish

## Section1. Setup

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

1. [The Open Source Definition](https://opensource.org/osd)
2. [Code of Conduct](https://www.contributor-covenant.org/)
   there is something, [contact method], needs to be updated.
3. [npm-config-doc](https://docs.npmjs.com/cli/v8/using-npm/config) run `npm config list -g`

   ```bash
    init-author-email = "xxx@gmail.com"
    init-author-name = "xxx"
    init-license = "MIT"
    init-version = "0.0.1"
   ```

## Section2. Lint

1. [ESLint](https://eslint.org/docs/user-guide/getting-started)
2. `eslint --init`
3. in `package.json` add script: `lint: "eslint ."`

## Section3. Test

## Section4. Babel

transpiling files && use esmodule to run test

[babel config](https://babeljs.io/docs/en/configuration)

in `03-trend-babel` branch run `npm run test`, will occur:

> Jest encountered an unexpected token

Solution:

`npm install --save-dev @babel/core @babel/cli @babel/preset-env`

create `babel.config.json`

add `cross-env` and `{env:{test:{...}}}` in `babel.config.json`

add eslint plugins for jest `yarn add --dev eslint eslint-plugin-jest`

## Section5. Webpack for build command

The goal is to build `src` into a `umd-lib`.

1. create `webpack.config.babel.js`
2. add `npm run build:umd` script
3. add `prebuild` script

- [how to use esm in webpack.config.js](https://stackoverflow.com/questions/31903692/how-can-i-use-es6-in-webpack-config-js)

## Links

### sections

- [opensource.org](https://opensource.org/licenses/alphabetical)

### open source libs

- [React](https://github.com/facebook/react)
- [ant-design](https://github.com/ant-design/ant-design/)
- [lodash](https://github.com/lodash/lodash)
- [umi](https://github.com/umijs/umi)
- [tonic](https://github.com/trendmicro-frontend/tonic-ui)

### resources

- [shields.io](https://shields.io/)
- [commitizen](https://juejin.cn/post/6844903606815064077)
