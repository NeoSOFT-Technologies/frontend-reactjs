# i18next

 i18next is used for adding localization to React App with along with react-i18next module

**What happens when you add localization to a website?**: When you add localization to a website you're making it available in multiple languages.
> The way it works is simple. Instead of putting the text you want to display in the components, it all goes into a JSON file. Then use the keys from the file in the components to get the text. You can add additional JSON files with the same keys and translated values for each desired language. Whatever language is set will determine which JSON file is used as the text for the app.<br/>
> 
**How to preview this functionality in a React app.**
>Step1: Clone the boilerplate from [NeoSOFT-Technologies/frontend-reactjs](https://github.com/NeoSOFT-Technologies/frontend-reactjs). It's a React App with a few components.<br/>
>The Goal is to make app available in different languages.

>Step2: Add the dependencies. Since `react-i18next` is based on `i18next`, so you will need both packages as dependencies to translate the app. You can add them with:
```
npm install --save react-i18next i18next
```
After adding the dependencies run `npm start` 

>Step3: Create the file structure. In the `src` folder, create an `i18n` folder to hold all the information related to translating the app. Here’s the structure that is pretty common: 
```
src
+-- i18n
    +-- locales
    |    +-- en
    |        +-- translations.json
    |    +-- hi
    |        +-- translations.json
    +-- config.js
```
The `config.js` file contains the set up for the `i18n` instance. The two JSON files will hold the text that goes in the app. `en` for English and `hi` for Hindi. Create the file structure in the boilerplate.

**Configure the i18n instance**: The `i18n` instance will hold all of your translations, the current language, and other info and methods needed. You can configure it in the `config.js` file like this:
```
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import hindi from "./locales/hi/translations.json";
import english from "./locales/en/translations.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    en: {
      translations: english,
    },
    hi: {
      translations: hindi,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["en", "hi"];

export { default } from "i18next";
```
>Import the necessary dependencies. Next, the `use(initReactI18next)` will bind `react-i18next` to the `i18n` instance. <br/>

>The first two properties of the `init` object parameter are a fallback language (`fallbackLng`) and default language (`lng`) are set both of these to English (`en`).<br/>

>The resources are the JSON files with the translations that created in the last step. The namespaces (ns) and default namespace (defaultNS) are the keys from the resources object.<br/>

>They can split your translations into multiple files (namespaces) if you have a large app to simplify the files. In which case, you would add more than just the one file in the `resources` object and add it to the namespaces array. This app is small, so all the translations can go in one file.

**Add the i18n instance to your app**: In the `index.js` file of the boilerplate, which contains the entire app, import the i18n instance created like this:
```
import './i18n/config';
```
Next, add an empty object to your two translations.json files so you don’t get any errors. You will fill in the keys later.

**Translate a functional component with the useTranslation hook**: 
>The `login.tsx` file is the component to translate. It’s a functional component, so you can use the `useTranslation` hook. Import it at the top with `import { useTranslation } from 'react-i18next'`.<br/>
>Next, instead of using the implicit return with the component, add curly brackets and the return statement so you can declare a variable. Get the `t`function from the hook with `const { t } = useTranslation();`.

All together, it should look like something this:
```
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { t } = useTranslation();

  return (
    …
  );
}
```
For example the text you want to translate in this component is greetings, sign-in-clause, sign-in button, email-placeholder. In your English translations.json file, add those properties to the object:
```
{
  "greeting": "Hello! let's get started",
  "sign-in-clause": "Sign in to continue.",
  "sign-in-button": "SIGN IN",
  "email-placeholder": "Enter Email",
}
```
Now, you can pass those keys to the `t` function to get the text. In the `login.tsx` component, use the `t` function to translate `greetings`, `sign-in-clause`, `sign-in button`, `email-placeholder` to the English text like this: t('key-from-json-file').

**Preview in Hindi**: 
>The four login buttons should be working for English. Add the same four keys to the Hindi JSON file so you can see what it will look like in Hindi. Here’s the translations:
```
{
  "greeting": "नमस्ते! आएँ शुरू करें",
  "sign-in-clause": "जारी रखने के लिए साइन इन करें।",
  "sign-in-button": "साइन इन करें",
  "email-placeholder": "ईमेल दर्ज करें"
}
```
After that, go to the `config.js` file, set the `lng` (default language) to `hi` and reload the page. The nav links should show up in hindi. When you are done, you can set the default language back to `en`.