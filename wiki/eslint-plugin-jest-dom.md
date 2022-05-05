# eslint-plugin-jest-dom

ESLint plugin to follow best practices and anticipate common mistakes when writing tests with jest-dom

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev eslint-plugin-jest-dom
```

This library has a required `peerDependencies` listing for [`ESLint`](https://eslint.org/).

## Usage

Add `jest-dom` to the plugins section of your `.eslintrc.js` configuration file.
You can omit the `eslint-plugin-` prefix:

```javascript
module.exports = {
  plugins: ["jest-dom"],
  rules: {
    // your configuration
  },
};
```

Then configure the rules you want to use under the rules section.

```javascript
module.exports = {
  rules: {
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
  },
};
```

## Recommended Configuration

This plugin exports a recommended configuration that enforces good `jest-dom`
practices _(you can find more info about enabled rules in
[Supported Rules section](#supported-rules))_.

To enable this configuration use the `extends` property in your `.eslintrc.js`
config file:

```javascript
module.exports = {
  extends: "plugin:jest-dom/recommended",
  rules: {
    // your configuration
  },
};
```