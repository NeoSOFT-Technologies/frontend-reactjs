# eslint-plugin-filename-rules
## Installation

`npm install -D eslint-plugin-filename-rules`

Add it to your .eslintrc.js:
```bash
module.exports = {
  plugins: [
    'filename-rules',
  ],
  rules: {
    'filename-rules/match': [2, 'camelcase'],
  },
};
 ```
Enabling the plugin
This plugin requires a version of eslint>=1.0.0 to be installed as a peer dependency.
Modify your .eslintrc file to load the plugin and enable the rules you want to use.
```json
{
  "plugins": [
    "filenames"
  ],
  "rules": {
    "filenames/match-regex": 2,
    "filenames/match-exported": 2,
    "filenames/no-index": 2
  }
}
```
## Plugin Options

The following built-in values are supported: `pascalcase`/`PascalCase`, `camelcase`/`camelCase`, `snakecase`/`snake_case`, `kebabcase`/`kebab-case`. You can also provide your own regex:

```js
...
'filename-rules/match': [2, /^([a-z]+-)*[a-z]+(?:\..*)?$/],
...
```

You can also specify different options for different file extensions. In this case the plugin will only check files with extensions you explicitly provided:

```js
...
'filename-rules/match': [2, { '.js': 'camelCase', '.ts': /^([a-z]+-)*[a-z]+(?:\..*)?$/ }],
...
```