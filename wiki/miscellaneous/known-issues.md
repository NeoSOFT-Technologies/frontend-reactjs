## ['React' was used before it was defined](https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined)

Bug occurs due to mismatch between @typescript-eslint versions in react-scripts, or else we have to override the rules

```
 {
            "files": ["**/*.ts", "**/*.tsx"],
            "plugins": ["@typescript-eslint"],
            "rules": {
              // https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
              "no-use-before-define": "off",
              "@typescript-eslint/no-use-before-define": ["error"]
            }
},
```

## [ESLint: 'test' is not defined.(no-undef)”](https://stackoverflow.com/questions/56398742/eslint-throws-no-undef-errors-when-linting-jest-test-files)

We need to add the jest entry to the environment 

```
"env": {
        "jest": true,
},
```

## Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration .

```
{
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```