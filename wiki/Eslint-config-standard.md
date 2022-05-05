# Eslint-config-standard

This module is for advanced users. You probably want to use standard instead :)

## Install

`npm install eslint-config-standard`

## Usage

Shareable configs are designed to work with the extends feature of .eslintrc files. You can learn more about Shareable Configs on the official ESLint website.
If you want to set up the config automatically, follow these steps in your project directory:\

`npx eslint --init`

- Select "Use a popular style guide."
- Select "Standard."
- Select a config file format.
- 
If prompted, confirm the installation of the necessary dependencies.
The above steps will automatically set up an ESLint configuration and install the necessary dependencies for you.
If you want to set up the config manually, run the following command:

`npm install --save-dev eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node`

Then, add this to your .eslintrc file:
```json
{
  "extends": "standard"
}
```
`Note: We omitted the eslint-config- prefix since it is automatically assumed by ESLint.`
You can override settings from the shareable config by adding them directly into your .eslintrc file.
Looking for something easier than this?
The easiest way to use JavaScript Standard Style to check your code is to use the standard package. This comes with a global Node command line program (standard) that you can run or add to your npm test script to quickly check your style.