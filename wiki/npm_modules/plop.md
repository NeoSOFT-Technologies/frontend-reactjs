## Plop

Micro-generator framework that makes it easy for an entire team to create files with a level of uniformity.
### What is Plop?
Plop is what I like to call a "micro-generator framework." Now, I call it that because it is a small tool that gives you a simple way to generate code or any other type of flat text files in a consistent way. You see, we all create structures and patterns in our code (routes, controllers, components, helpers, etc). These patterns change and improve over time so when you need to create a NEW insert-name-of-pattern-here, it's not always easy to locate the files in your codebase that represent the current "best practice." That's where plop saves you. With plop, you have your "best practice" method of creating any given pattern in CODE. Code that can easily be run from the terminal by typing plop. Not only does this save you from hunting around in your codebase for the right files to copy, but it also turns "the right way" into "the easiest way" to make new files.

### Installation
1. Add plop to your project
`$ npm install --save-dev plop`
2. Install plop globally (optional, but recommended for easy access)
`$ npm install -g plop`
3. Create a plopfile.js at the root of your project
```javascript
export default function (plop) {
	// create your generators here
	plop.setGenerator('basics', {
		description: 'this is a skeleton plopfile',
		prompts: [], // array of inquirer prompts
		actions: []  // array of actions
	});
};
```

### First Profile
A plopfile starts its life as a node module that exports a function which accepts the plop object as its first parameter.
```javascript
export default function (plop) {};
```
The plop object exposes the plop API object which contains the setGenerator(name, config) function. This is the function that you use to (wait for it) create a generator for this plopfile. When plop is run from the terminal in this directory (or any sub-directory), a list of these generators will be displayed.

Let's try setting up a basic generator how we implemented in application.

### Example:
```javascript
const plopfile = (plop) => {
  plop.setHelper("camelCase", (text) => {
    return text
      .replace(/^(?:\w|[A-Z]|\b\w)$/g, function (word) {
        return word.toUpperCase();
      })
      .replace(/\s+/g, "");
  });

  plop.setGenerator("page", {
    description: "creates a page component under src/page directory",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of page component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{dashCase name}}/{{camelCase name}}.tsx",
        templateFile: "./templates/react-component.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{dashCase name}}/{{camelCase name}}.test.tsx",
      },
      {
        type: "add",
        path: "src/pages/{{dashCase name}}/{{camelCase name}}.scss",
      },
    ],
  });
};
```
The controller generator we created above will ask us 1 question, and create 1 file. This can be expanded to ask as many questions as needed, and create as many files as needed. There are also additional actions that can be used to alter our codebase in different ways.

### Why Generators?
Because when you create your boilerplate separate from your code, you naturally put more time and thought into it.

Because saving your team (or yourself) 5-15 minutes when creating every route, component, controller, helper, test, view, etc... really adds up.

### CLI Usage

Once plop is installed, and you have created a generator, you are ready to run plop from the terminal. Running plop with no parameters will present you with a list of generators to pick from. You can also run plop [generatorName] to trigger a generator directly. If you did not install plop globally, you will need to setup an npm script to run plop for you

```javascript
// package.json
{
    ...,
    "scripts": {
        "generate": "plop"
    },
    ...
}
```

### Bypassing Prompts (by Name)
you can even bypass the questions by providing values in command like "npm run generate" <type of file> <name of file>
```
> react-redux-toolkit-typescript-boilerplate@1.0.0 generate
> plop

? [PLOP] Please choose a generator. (Use arrow keys)
> page - creates a page component under src/page directory       
  component - creates a component under src/components directory 
  resource - creates a resource under src/resources directory    
  service - creates a service file under src/services directory  
  slice - creates a redux toolkit slice src/store directory      
  utility - creates a utility file under src/utils directory     
  ```
  you will get this commands by using arrow key,you can select the  path where you what to create a component based on that it will create
  ```
  
? [PLOP] Please choose a generator. page - creates a page component under src/page directory
? What is the name of page component? Dashboard
✔  ++ \src\pages\dashboard\Dashboard.tsx
✔  ++ \src\pages\dashboard\Dashboard.test.tsx
✔  ++ \src\pages\dashboard\Dashboard.scss
 ```
 It is the easiest way" to make new files
