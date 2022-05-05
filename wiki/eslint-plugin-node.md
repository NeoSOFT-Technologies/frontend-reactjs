# eslint-plugin-node
##  Install & Usage

```
$ npm install --save-dev eslint eslint-plugin-node
```

- Requires Node.js `>=8.10.0`
- Requires ESLint `>=5.16.0`

**Note:** It recommends a use of [the "engines" field of package.json](https://docs.npmjs.com/files/package.json#engines). The "engines" field is used by `node/no-unsupported-features/*` rules.

**.eslintrc.json** (An example)

```jsonc
{
    "extends": [
        "eslint:recommended",
        "plugin:node/recommended"
    ],
    "parserOptions": {
        // Only ESLint 6.2.0 and later support ES2020.
        "ecmaVersion": 2020
    },
    "rules": {
        "node/exports-style": ["error", "module.exports"],
        "node/file-extension-in-import": ["error", "always"],
        "node/prefer-global/buffer": ["error", "always"],
        "node/prefer-global/console": ["error", "always"],
        "node/prefer-global/process": ["error", "always"],
        "node/prefer-global/url-search-params": ["error", "always"],
        "node/prefer-global/url": ["error", "always"],
        "node/prefer-promises/dns": "error",
        "node/prefer-promises/fs": "error"
    }
}
```

**package.json** (An example)

```json
{
    "name": "your-module",
    "version": "1.0.0",
    "type": "commonjs",
    "engines": {
        "node": ">=8.10.0"
    }
}
```

## 📖 Rules

- ⭐️ - the mark of recommended rules.
- ✒️ - the mark of fixable rules.

### Possible Errors

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [node/handle-callback-err](./docs/rules/handle-callback-err.md) | require error handling in callbacks |  |
| [node/no-callback-literal](./docs/rules/no-callback-literal.md) | ensure Node.js-style error-first callback pattern is followed |  |
| [node/no-exports-assign](./docs/rules/no-exports-assign.md) | disallow the assignment to `exports` | ⭐️ |
| [node/no-extraneous-import](./docs/rules/no-extraneous-import.md) | disallow `import` declarations which import extraneous modules | ⭐️ |
| [node/no-extraneous-require](./docs/rules/no-extraneous-require.md) | disallow `require()` expressions which import extraneous modules | ⭐️ |
| [node/no-missing-import](./docs/rules/no-missing-import.md) | disallow `import` declarations which import non-existence modules | ⭐️ |
| [node/no-missing-require](./docs/rules/no-missing-require.md) | disallow `require()` expressions which import non-existence modules | ⭐️ |
| [node/no-new-require](./docs/rules/no-new-require.md) | disallow `new` operators with calls to `require` |  |
| [node/no-path-concat](./docs/rules/no-path-concat.md) | disallow string concatenation with `__dirname` and `__filename` |  |
| [node/no-process-exit](./docs/rules/no-process-exit.md) | disallow the use of `process.exit()` |  |
| [node/no-unpublished-bin](./docs/rules/no-unpublished-bin.md) | disallow `bin` files that npm ignores | ⭐️ |
| [node/no-unpublished-import](./docs/rules/no-unpublished-import.md) | disallow `import` declarations which import private modules | ⭐️ |
| [node/no-unpublished-require](./docs/rules/no-unpublished-require.md) | disallow `require()` expressions which import private modules | ⭐️ |
| [node/no-unsupported-features/es-builtins](./docs/rules/no-unsupported-features/es-builtins.md) | disallow unsupported ECMAScript built-ins on the specified version | ⭐️ |
| [node/no-unsupported-features/es-syntax](./docs/rules/no-unsupported-features/es-syntax.md) | disallow unsupported ECMAScript syntax on the specified version | ⭐️ |
| [node/no-unsupported-features/node-builtins](./docs/rules/no-unsupported-features/node-builtins.md) | disallow unsupported Node.js built-in APIs on the specified version | ⭐️ |
| [node/process-exit-as-throw](./docs/rules/process-exit-as-throw.md) | make `process.exit()` expressions the same code path as `throw` | ⭐️ |
| [node/shebang](./docs/rules/shebang.md) | suggest correct usage of shebang | ⭐️✒️ |

### Best Practices

| Rule ID | Description |    |
|:--------|:------------|:--:|
| [node/no-deprecated-api](./docs/rules/no-deprecated-api.md) | disallow deprecated APIs | ⭐️ |

