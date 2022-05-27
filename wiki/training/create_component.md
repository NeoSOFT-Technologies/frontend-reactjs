# React Components
>Components are independent and reusable bits of code.Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

### How To Create Component
### Class Component
A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

The component also requires a render() method, this method returns HTML.

*Example*
Create a Class component called Hello

```javascript
class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

###  Function Component
Here is the same example as above, but created using a Function component instead.

A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code & are easier to understand.
Example
Create a Function component called Hello
```javascript
function Hello() {
  return <h2>Hello</h2>;
}
```

## Folder structure for Page Components

```
.
📂 src
  └──📂 pages
      ├──📂 error-pages
      |   └── 📝 Error401.tsx
      ├──📂 landing
      |   └── 📝 LandingPage.tsx
      ├──📂 login
      |   └── 📝 Login.tsx
      └──📂 registration
          └── 📝 Registration.tsx
```

## Folder structure for Reuseable Components

```
.
📂 src
  └──📂 component
      ├──📂 authguard
      |   └── 📝 AuthGuard.tsx
      ├──📂 header
      |   └── 📝 Header.tsx
      |   └── 📝 Header.test.tsx
      ├──📂 i18n
      |   └── 📝 LanguageChange.tsx
      |   └── 📝 LanguageChange.test.tsx
      ├──📂 loader
      |   └── 📝 Loader.tsx
      |   └── 📝 Loader.test.tsx
      ├──📂 password-field
      |   └── 📝 Password.tsx
      |   └── 📝 Password.test.tsx
      └──📂 toast-alert
          └──toast-alert.tsx
```

For adding a component go to frontend-reactjs/src/pages/ for Page Components and frontend-reactjs/src/components/ for Reuseable components and  add the component by creating the folder of the name of the component in small case and add over there.

### How Reuseable components is being used in our project?

>step 1: import the loader from "../../components/loader/Loader"; in landingPage component
        
        import Loader from "../../components/loader/Loader";
        
>step 2: After importing it into the LandingPage it will return the HTML elements which are present in Loader.tsx components to the App.tsx simply by writing <Loader />. 

>step 3: Now this LandingPage is being get imported into the App.tsx which is present in /src/pages/ folder.
         
        import LandingPage from "./pages/landing/LandingPage";
       
>step 4: router-dom in app.tsx would be look like this

```javascript
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path={"/landing"}
            element={authGuard.protect(<LandingPage />, isAutheticated)}
          />
          {/* redirect if not match any path */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
</BrowserRouter>
```
>step 5: We have created a ```<Route />``` inside the ```<Routes />``` & this ```<Routes />``` is also inside into the ```<BrowserRouter></BrowserRouter>```. BrowserRouter is a router implementation that uses the HTML5 history API to keep our UI in sync with the URL. So basically, we have import reusable component as a parameter into the elemnet which are encloses into the placeholder and then define the path which gives us an access to the element. this steps we are did several types until and unles we achieved the desired UI's

