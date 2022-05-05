### @typescript-eslint/parser
An ESLint custom parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.
###installation
`$npm install --save-dev typescript-eslint-parser`
###Usage
There is sometimes an incorrect assumption that the parser itself is what does everything necessary to facilitate the use of ESLint with TypeScript. In actuality, it is the combination of the parser and one or more plugins which allow you to maximize your usage of ESLint with TypeScript.
**For example**, once this parser successfully produces an AST for the TypeScript source code, it might well contain some information which simply does not exist in a standard JavaScript context, such as the data for a TypeScript-specific construct, like an interface.
The core rules built into ESLint, such as indent have no knowledge of such constructs, so it is impossible to expect them to work out of the box with them.
Instead, you also need to make use of one more plugins which will add or extend rules with TypeScript-specific features.
By far the most common case will be installing the eslint-plugin-typescript plugin, but there are also other relevant options available such a eslint-plugin-tslint.
###Configuration
The following additional configuration options are available by specifying them in parserOptions in your ESLint configuration file.
jsx - default false. Enable parsing JSX when true. More details can be found here.
It's false on *.ts files regardless of this option.
It's true on *.tsx files regardless of this option.
Otherwise, it respects this option.
useJSXTextNode - default true. Please set false if you use this parser on ESLint v4. If this is false, the parser creates the AST of JSX texts as the legacy style.
```javascript
.eslintrc.json
{
    "parser": "typescript-eslint-parser",
    "parserOptions": {
        "jsx": true,
        "useJSXTextNode": true
    }
}

```

###Integration Tests
We have a very flexible way of running integration tests which connects all of the moving parts of the usage of this parser in the ESLint ecosystem.
We run each test within its own docker container, and so each one has complete autonomy over what dependencies/plugins are installed and what versions are used. This also has the benefit of not bloating the package.json and node_modules of the parser project itself.
If you are going to submit an issue related to the usage of this parser with ESLint, please consider creating a failing integration test which clearly demonstrates the behavior. It's honestly super quick!
You just need to duplicate one of the existing test sub-directories found in tests/integration/, tweak the dependencies and ESLint config to match what you need, and add a new entry to the docker-compose.yml file which matches the format of the existing ones..

###Build Commands
`$npm test - run all linting and tests`
`$npm run lint - run all linting`
`$npm run integration-tests - run only integration tests`