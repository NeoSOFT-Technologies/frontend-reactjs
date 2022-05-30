# Review checklist

## General

1. Does the code work?
2. Code is easily understand.
3. Code is written following the coding standarts/guidelines (React in our case).
4. Code is in sync with existing code patterns/technologies.
5. DRY. Is the same code duplicated more than twice?
6. Can the code be easily tested (don't forget about React components)?
7. Are functions/classes/components reasonably small (not too big)?
8. Maintain proper folder structure
9. Naming conventions followed for variables, file names, translations.
10. Removed unused packages from NPM.
11. Separation of Concerns followed.
12. Documentation for easy to reference and understand

## Codestyle

1. No hardcoded values, use constants values.
2. Avoid multiple if/else blocks.
3. No commented out code.
4. No unnecessary comments: comments that describe the how.
5. Add necessary comments where needed. Necessary comments are comments that describe the why.

## ES6/7

1. Use ES6 features.
2. Use fat arrow instead of var that = this. Be consistent in your usage of arrow function.
3. Use spread/rest operator.
4. Use default values.
5. Use const over let (avoid var).
6. Use import and export.
7. Use template literals.
8. Use destructuring assignment for arrays and objects.
9. Use Promises or Asyns/Await. Rejection is handled.

## React code review

1. Are components have defined propTypes?
2. Keep components small.
3. Functional components for components that don't use state.
4. No api calls in containers, delegate to redux-toolkit
5. No state updates in loop.
6. No useless constructor.
7. Minimize logic in the render method.
8. Don’t use mixins, prefer HOC and composition.

## Third-Party Libraries

1. Use lodash/ramda functions instead of implementing itself.
2. Is Immutable.js was used correctly?
3. Is any nice/useful library was used wich we didn't know before?

## ESLint

1. Code has no any linter errors or warnings.
2. No console.logs.

## SCSS/CSS in JS

1. Consistent naming conventions are used (BEM, OOCSS, SMACSS, e.t.c.).
2. Use Hex color codes #000 unless using rgba().
3. Avoid absolute positioning.
4. Use flexbox.
5. Avoid !important.
6. Do not animate width, height, top, left and others. Use transform instead.
7. Use same units for all project.
8. Avoid inline styles.
9. Elements are nested properly and do not overlap.
10. Keep classes as flat as possible, and avoid nesting too deep

## Env

1. Use separate env files for difference stages(development,production,test,staging,etc)
2. Dont forget to add your all env files to git-ignore file to prevent tracking them after any modification
3. After each time you modify in env file stop the project serve and start it over again, otherwise its won't listen to your new changes

## Testing

1. Tests are readable, maintainable, trustworthy.
2. Test names (describe, it) are concise, explicit, descriptive.
3. Avoid logic in your tests.
4. Don't test multiple concerns in the same test.
5. Cover the general case and the edge cases.
6. Test the behaviour, not the internal implementation.
7. Use a mock to simulate/stub complex class structure, methods or async functions.
8. Maintain proper code coverage

## Git

1. Commits are small and divided into logical parts.
2. Commits messages are small and understandable.
3. Use branches for new features.
4. Make sure no dist files, editor/IDE files, etc are checked in. There should be a .gitignore for that.

## Other

1. Security.
2. Usability.

