# eslint-config-perf-standard

<!--
    [![build status][build-png]][build]
    [![Coverage Status][cover-png]][cover]
    [![Davis Dependency status][dep-png]][dep]
-->

<!-- [![NPM][npm-png]][npm] -->

A set of eslint rules for performant JS

## Example

Works with eslint@1.8.0

Use like so:

```js
// .eslintrc
{
    "extends": "perf-standard",
    "rules": {
        "max-len": [0]
    }
}
```

Also configure your package.json like so:

```js
{
    "scripts": {
        "lint": "eslint $(git ls-files | grep '.js$')"
    }
}
```

## Rules explanation

There are a lot of rules in this project; I will explain a few of
them here for the ones that are non-trivial

### `no-restricted-modules`

There are a few modules that are banned and there are alternatives
available.

 - `lodash`, `underscore`. These modules come with a few downsides. Namely
    that they are not performant and that they add many stacks to your
    stacktrace and flamegraphs. Favor plain loops, do not use `map()` and friends.
 - `async`. Async is a kitchen sink and not performant. Favor a library that
    discourages allocation of closures like https://github.com/Raynos/fanout-task


## Installation

`npm install eslint-config-perf-standard`

## Tests

`npm test`

## Contributors

 - Raynos

## MIT Licensed

  [build-png]: https://secure.travis-ci.org/Raynos/eslint-config-perf-standard.png
  [build]: https://travis-ci.org/Raynos/eslint-config-perf-standard
  [cover-png]: https://coveralls.io/repos/Raynos/eslint-config-perf-standard/badge.png
  [cover]: https://coveralls.io/r/Raynos/eslint-config-perf-standard
  [dep-png]: https://david-dm.org/Raynos/eslint-config-perf-standard.png
  [dep]: https://david-dm.org/Raynos/eslint-config-perf-standard
  [npm-png]: https://nodei.co/npm/eslint-config-perf-standard.png?stars&downloads
  [npm]: https://nodei.co/npm/eslint-config-perf-standard
