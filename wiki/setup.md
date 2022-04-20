## Instructions 

### Installations and initial setup

If you're just getting started with React-Redux, setting up a project with create-react-app is straightforward. In addition, you can use the flags `--template`  `redux-typescript` for creating the project. 

```
npx create-react-app my-app --template redux-typescript
```

The project structure should look like the following. It is particularly important to pay attention to the `src` directory, which contains the `app`, and the `feature` directory, which should contain subdirectories for each major feature. This will, however, be changed in accordance with our requirements. 

You can view the official documentation for TypeScript Quick Start for Redux Toolkit [here](https://redux-toolkit.js.org/tutorials/typescript)

## Why Redux Toolkit 

Redux has proven to be a popular option for state management at this point. Its pattern makes states predictable because reducers, which are pure functions, always produce the same output regardless of the state or actions passed.

The Redux flow is also easily maintained and scalable due to its strict coding rules on how each component should behave and work. 

Redux Toolkit was originally created to help address three common concerns about Redux:

- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code"
