# micro-library

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/frank3en/micro-library/GitHub%20Actions%20Build)

Front-end devs share toys.

## Features

- [x] Setup
- [x] Lint
- [x] Test
- [x] Babel - transpile code from `cmj` to `esm`
- [x] Webpack - build - npm pack
- [x] CI
- [ ] Test Coverage
- [ ] Git hooks
- [x] Publish
- [x] Semantic Release with Github Actions

## Getting started

### Section1. Setup

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

### Section2. Lint

1. [ESLint](https://eslint.org/docs/user-guide/getting-started)
2. `eslint --init`
3. in `package.json` add script: `lint: "eslint ."`

### Section3. Test

### Section4. Babel

transpiling files && use esmodule to run test

[babel config](https://babeljs.io/docs/en/configuration)

in `03-trend-babel` branch run `npm run test`, will occur:

> Jest encountered an unexpected token

Solution:

`npm install --save-dev @babel/core @babel/cli @babel/preset-env`

create `babel.config.json`

add `cross-env` and `{env:{test:{...}}}` in `babel.config.json`

add eslint plugins for jest `yarn add --dev eslint eslint-plugin-jest`

### Section5. Webpack for build command

The goal is to build `src` into a `umd-lib`.

1. create `webpack.config.babel.js`
2. add `npm run build:umd` script
3. add `prebuild` script

- [how to use esm in webpack.config.js](https://stackoverflow.com/questions/31903692/how-can-i-use-es6-in-webpack-config-js)

### Section6. CI with Github Actions

- [quick start](https://docs.github.com/cn/actions/quickstart)
- [workflow](https://docs.github.com/en/actions/learn-github-actions/events-that-trigger-workflows)
- [starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci)

### Section7. Publish

1. `npm login` && `npm publish`
2. dupication name -> add scope
   1. `npm login --scope=<scope>`
   2. change package name with `<scope>/pagename`
   3. `npm publish --access public`
3. `npm version`

### Section8. Semantic Release with Github Actions

- [actions.yml](https://github.com/marketplace/actions/action-for-semantic-release)
- [semantic-release configuration](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration)

1. setup configuration
2. add secrets
3. update workflow

## TODOs...

0. ui-components test & coverage
1. lerna for monorepo
2. package size
3. document with storybook/dumi
4. ...

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
