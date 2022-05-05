# Prettier
 
# Installation
First, install Prettier locally:
npm
yarn
```
npm install --save-dev --save-exact prettier
```
Then, create an empty config file to let editors and other tools know you are using Prettier:
`
echo {}> .prettierrc.json
 `
Next, create a .prettierignore file to let the Prettier CLI and editors know which files to not format. Here’s an example:
# Ignore artifacts:
build

coverage
 
Tip! Base your .prettierignore on .gitignore and .eslintignore (if you have one).
Another tip! If your project isn’t ready to format, say, HTML files yet, add *.html.
Now, format all files with Prettier:

`npm`
`yarn`
`npx prettier --write .`
 
Prettier takes your code and reprints it from scratch by taking the line length into account.
For example, take the following code:
foo(arg1, arg2, arg3, arg4);

It fits in a single line so it’s going to stay as is. However, we've all run into this situation:
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());

Suddenly our previous format for calling function breaks down because this is too long. Prettier is going to do the painstaking work of reprinting it like that for you:
```
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
```

Prettier enforces a consistent code style (i.e. code formatting that won’t affect the AST) across your entire codebase because it disregards the original styling* by parsing it away and re-printing the parsed AST with its own rules that take the maximum line length into account, wrapping code when necessary.