# How to use `.env` files.


The variables declared in the environment can be used as if they are declared locally in the JS files.

Custom environment variables can be created beginning with `REACT_APP_` and followed by a variable name. 
The custom varibales that are used in the project that need to be set manually by the developer in run time or in `.env` file. 
Any other variables except `NODE_ENV` will be ignored to avoid accidentally exposing a private key on the machine that could have the same name.

> WARNING: Do not store any secrets (such as private API keys) in your React app
>
> Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.

**The environment variables are embedded during the build time**. Since Create React App produces a static HTML/CSS/JS bundle, it can’t possibly read them at runtime. It is required to rebuild the app on the server anytime the variables are changed.

These environment variables will be defined on `process.env`. For example, having an environment variable named `REACT_APP_NOT_SECRET_CODE` will be exposed in to JS as `process.env.REACT_APP_NOT_SECRET_CODE`.

## Functionality of `NODE_ENV` variable

There is also a built-in environment variable called `NODE_ENV`. This variable is by default defined by the system, You can read it from `process.env.NODE_ENV`. When you run `npm start`, it is always equal to `'development'`, when you run `npm test` it is always equal to `'test'`, and when you run `npm run build` to make a production bundle, it is always equal to `'production'`. 
**You cannot override `NODE_ENV` manually.** This prevents developers from accidentally deploying a slow development build to production.

These environment variables can be useful for displaying information conditionally based on where the project is deployed or consuming sensitive data that lives outside of version control.

Having access to the `NODE_ENV` is useful for performing actions conditionally:

```js
if (process.env.NODE_ENV !== 'production') {
  analytics.disable();
}
```

When you compile the app with `npm run build`, the minification step will strip out this condition, and the resulting bundle will be smaller.

## Referencing Environment Variables in the HTML

You can also access the environment variables starting with `REACT_APP_` in the `public/index.html`. For example:

```html
<title>%REACT_APP_WEBSITE_NAME%</title>
```

>Note that the caveats from the above section apply:

>- Apart from a few built-in variables (`NODE_ENV` and `PUBLIC_URL`), variable names must start with `REACT_APP_` to work.
- The environment variables are injected at build time.

## Adding Temporary Environment Variables In Shell

Defining environment variables can vary between OSes. It’s also important to know that this manner is temporary for the life of the shell session.

#### Windows (cmd.exe)

```cmd
set "REACT_APP_NOT_SECRET_CODE=abcdef" && npm start
```

(Note: Quotes around the variable assignment are required to avoid a trailing whitespace.)

#### Windows (Powershell)

```Powershell
($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)
```

#### Linux, macOS (Bash)

```sh
REACT_APP_NOT_SECRET_CODE=abcdef npm start
```

## Adding Development Environment Variables In `.env`

To define permanent environment variables, create a file called `.env` in the root of your project:

```
REACT_APP_NOT_SECRET_CODE=abcdef
```


> Note: You need to restart the development server after changing `.env` files.

`.env` files **should be** checked into source control (with the exclusion of `.env*.local`).

## What other `.env` files can be used?

- `.env`: Default.
- `.env.local`: Local overrides. **This file is loaded for all environments except test.**
- `.env.development`, `.env.test`, `.env.production`: Environment-specific settings.
- `.env.development.local`, `.env.test.local`, `.env.production.local`: Local overrides of environment-specific settings.

Files on the left have more priority than files on the right:

- `npm start`: `.env.development.local`, `.env.local`, `.env.development`, `.env`
- `npm run build`: `.env.production.local`, `.env.local`, `.env.production`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

These variables will act as the defaults if the machine does not explicitly set them.

 Defining environment variables for development, your CI and/or hosting platform will require these files defined as well.

Please refer to the [dotenv documentation](https://github.com/motdotla/dotenv) for more details.

## Building the Application using Specific `.env` file.

-`npm run build:dev` : Run this command to clean the current build files and Create a new build file using the `.env` file.
-`npm run build:staging`: Run this command to clean the current build files and create a new build file using the `.env.staging` file

To target a specific build file Follow the given steps:-
- lets suppose you want to create a build using `env.production`, add the proper script to the `package.json` file under`"scripts"`.
- In our case the Key will look something like `build:production`.
- Now in order to clear the exisiting build files we will add `npm run clean` to our value initially.
- Following this you want to append the next command using `&&` as it inticates that after runninf=g the first command we can now execute the next command.
- Next we need to cerate a `.env.production` file and add all the necessary environment variables.
- After the Creation of `.env.production` file you need to add `env-cmd -f .env.production  react-scripts build` under `build:production` followed by the `&&` as prior mentioned what this will do is locate the `.env.production` file and use it to buildthe application.
- After following through all the steps the script will look something like this:

```json
"scripts":{
  "build:production":"npm run clean && env-cmd -f .env.production  react-scripts build"
}
```
Congrats!!! you have successfully learnt how to Building an Application using specific `.env` file 


### variables used in the project
PORT is used for running the application on the provided port
REACT_APP_API_BASEURL it is used for setting the backend api base url
REACT_APP_GATEWAY_API
REACT_APP_API_TIMEOUT
REACT_APP_CDN_URL=
REACT_APP_IMAGES_CDN_URL
REACT_APP_HOST