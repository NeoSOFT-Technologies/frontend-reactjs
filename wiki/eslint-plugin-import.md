# eslint-plugin-import

This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names. All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.

**IF YOU ARE USING THIS WITH SUBLIME**: see the [bottom section](#sublimelinter-eslint) for important info.

## Rules

### Static analysis

* Ensure imports point to a file/module that can be resolved. ([`no-unresolved`])
* Ensure named imports correspond to a named export in the remote file. ([`named`])
* Ensure a default export is present, given a default import. ([`default`])
* Ensure imported namespaces contain dereferenced properties as they are dereferenced. ([`namespace`])
* Restrict which files can be imported in a given folder ([`no-restricted-paths`])
* Forbid import of modules using absolute paths ([`no-absolute-path`])
* Forbid `require()` calls with expressions ([`no-dynamic-require`])
* Prevent importing the submodules of other modules ([`no-internal-modules`])
* Forbid webpack loader syntax in imports ([`no-webpack-loader-syntax`])
* Forbid a module from importing itself ([`no-self-import`])
* Forbid a module from importing a module with a dependency path back to itself ([`no-cycle`])
* Prevent unnecessary path segments in import and require statements ([`no-useless-path-segments`])
* Forbid importing modules from parent directories ([`no-relative-parent-imports`])
* Prevent importing packages through relative paths ([`no-relative-packages`])

[`no-unresolved`]: ./docs/rules/no-unresolved.md
[`named`]: ./docs/rules/named.md
[`default`]: ./docs/rules/default.md
[`namespace`]: ./docs/rules/namespace.md
[`no-restricted-paths`]: ./docs/rules/no-restricted-paths.md
[`no-absolute-path`]: ./docs/rules/no-absolute-path.md
[`no-dynamic-require`]: ./docs/rules/no-dynamic-require.md
[`no-internal-modules`]: ./docs/rules/no-internal-modules.md
[`no-webpack-loader-syntax`]: ./docs/rules/no-webpack-loader-syntax.md
[`no-self-import`]: ./docs/rules/no-self-import.md
[`no-cycle`]: ./docs/rules/no-cycle.md
[`no-useless-path-segments`]: ./docs/rules/no-useless-path-segments.md
[`no-relative-parent-imports`]: ./docs/rules/no-relative-parent-imports.md
[`no-relative-packages`]: ./docs/rules/no-relative-packages.md

### Helpful warnings


* Report any invalid exports, i.e. re-export of the same name ([`export`])
* Report use of exported name as identifier of default export ([`no-named-as-default`])
* Report use of exported name as property of default export ([`no-named-as-default-member`])
* Report imported names marked with `@deprecated` documentation tag ([`no-deprecated`])
* Forbid the use of extraneous packages ([`no-extraneous-dependencies`])
* Forbid the use of mutable exports with `var` or `let`. ([`no-mutable-exports`])
* Report modules without exports, or exports without matching import in another module ([`no-unused-modules`])

[`export`]: ./docs/rules/export.md
[`no-named-as-default`]: ./docs/rules/no-named-as-default.md
[`no-named-as-default-member`]: ./docs/rules/no-named-as-default-member.md
[`no-deprecated`]: ./docs/rules/no-deprecated.md
[`no-extraneous-dependencies`]: ./docs/rules/no-extraneous-dependencies.md
[`no-mutable-exports`]: ./docs/rules/no-mutable-exports.md
[`no-unused-modules`]: ./docs/rules/no-unused-modules.md

### Module systems

* Report potentially ambiguous parse goal (`script` vs. `module`) ([`unambiguous`])
* Report CommonJS `require` calls and `module.exports` or `exports.*`. ([`no-commonjs`])
* Report AMD `require` and `define` calls. ([`no-amd`])
* No Node.js builtin modules. ([`no-nodejs-modules`])
* Forbid imports with CommonJS exports ([`no-import-module-exports`])

[`unambiguous`]: ./docs/rules/unambiguous.md
[`no-commonjs`]: ./docs/rules/no-commonjs.md
[`no-amd`]: ./docs/rules/no-amd.md
[`no-nodejs-modules`]: ./docs/rules/no-nodejs-modules.md
[`no-import-module-exports`]: ./docs/rules/no-import-module-exports.md


### Style guide

* Ensure all imports appear before other statements ([`first`])
* Ensure all exports appear after other statements ([`exports-last`])
* Report repeated import of the same module in multiple places ([`no-duplicates`])
* Forbid namespace (a.k.a. "wildcard" `*`) imports ([`no-namespace`])
* Ensure consistent use of file extension within the import path ([`extensions`])
* Enforce a convention in module import order ([`order`])
* Enforce a newline after import statements ([`newline-after-import`])
* Prefer a default export if module exports a single name ([`prefer-default-export`])
* Limit the maximum number of dependencies a module can have ([`max-dependencies`])
* Forbid unassigned imports ([`no-unassigned-import`])
* Forbid named default exports ([`no-named-default`])
* Forbid default exports ([`no-default-export`])
* Forbid named exports ([`no-named-export`])
* Forbid anonymous values as default exports ([`no-anonymous-default-export`])
* Prefer named exports to be grouped together in a single export declaration ([`group-exports`])
* Enforce a leading comment with the webpackChunkName for dynamic imports ([`dynamic-import-chunkname`])

[`first`]: ./docs/rules/first.md
[`exports-last`]: ./docs/rules/exports-last.md
[`no-duplicates`]: ./docs/rules/no-duplicates.md
[`no-namespace`]: ./docs/rules/no-namespace.md
[`extensions`]: ./docs/rules/extensions.md
[`order`]: ./docs/rules/order.md
[`newline-after-import`]: ./docs/rules/newline-after-import.md
[`prefer-default-export`]: ./docs/rules/prefer-default-export.md
[`max-dependencies`]: ./docs/rules/max-dependencies.md
[`no-unassigned-import`]: ./docs/rules/no-unassigned-import.md
[`no-named-default`]: ./docs/rules/no-named-default.md
[`no-anonymous-default-export`]: ./docs/rules/no-anonymous-default-export.md
[`group-exports`]: ./docs/rules/group-exports.md
[`no-default-export`]: ./docs/rules/no-default-export.md
[`no-named-export`]: ./docs/rules/no-named-export.md
[`dynamic-import-chunkname`]: ./docs/rules/dynamic-import-chunkname.md

## `eslint-plugin-import` for enterprise

Available as part of the Tidelift Subscription.

The maintainers of `eslint-plugin-import` and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-eslint-plugin-import?utm_source=npm-eslint-plugin-import&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

## Installation

```sh
npm install eslint-plugin-import -g
```

or if you manage ESLint as a dev dependency:

```sh
# inside your project's working tree
npm install eslint-plugin-import --save-dev
```

All rules are off by default. However, you may configure them manually
in your `.eslintrc.(yml|json|js)`, or extend one of the canned configs:

```yaml
---
extends:
  - eslint:recommended
  - plugin:import/recommended
  # alternatively, 'recommended' is the combination of these two rule sets:
  - plugin:import/errors
  - plugin:import/warnings

# or configure manually:
plugins:
  - import

rules:
  import/no-unresolved: [2, {commonjs: true, amd: true}]
  import/named: 2
  import/namespace: 2
  import/default: 2
  import/export: 2
  # etc...
```

# TypeScript

You may use the following shortcut or assemble your own config using the granular settings described below.

Make sure you have installed [`@typescript-eslint/parser`] which is used in the following configuration. Unfortunately NPM does not allow to list optional peer dependencies.

```yaml
extends:
  - eslint:recommended
  - plugin:import/recommended
  - plugin:import/typescript # this line does the trick
```

[`@typescript-eslint/parser`]: https://github.com/typescript-eslint/typescript-eslint/tree/HEAD/packages/parser

You will also need to install and configure the TypeScript resolver:
[`eslint-import-resolver-typescript`](https://github.com/alexgorbatchev/eslint-import-resolver-typescript).

# Resolvers

With the advent of module bundlers and the current state of modules and module
syntax specs, it's not always obvious where `import x from 'module'` should look
to find the file behind `module`.

Up through v0.10ish, this plugin has directly used substack's [`resolve`] plugin,
which implements Node's import behavior. This works pretty well in most cases.

However, webpack allows a number of things in import module source strings that
Node does not, such as loaders (`import 'file!./whatever'`) and a number of
aliasing schemes, such as [`externals`]: mapping a module id to a global name at
runtime (allowing some modules to be included more traditionally via script tags).

In the interest of supporting both of these, v0.11 introduces resolvers.

Currently [Node] and [webpack] resolution have been implemented, but the
resolvers are just npm packages, so [third party packages are supported](https://github.com/import-js/eslint-plugin-import/wiki/Resolvers) (and encouraged!).

You can reference resolvers in several ways (in order of precedence):

- as a conventional `eslint-import-resolver` name, like `eslint-import-resolver-foo`:

```yaml
# .eslintrc.yml
settings:
  # uses 'eslint-import-resolver-foo':
  import/resolver: foo
```
```js
// .eslintrc.js
module.exports = {
  settings: {
    'import/resolver': {
      foo: { someConfig: value }
    }
  }
}
```

- with a full npm module name, like `my-awesome-npm-module`:

```yaml
# .eslintrc.yml
settings:
  import/resolver: 'my-awesome-npm-module'
```
```js
// .eslintrc.js
module.exports = {
  settings: {
    'import/resolver': {
      'my-awesome-npm-module': { someConfig: value }
    }
  }
}
```