# React-toastify
### Installation
**With npm:**

`$npm install --save react-toastify`
**with yarn**
`yarn add react-toastify`

```javascript
 import React from 'react';
  import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';

  function App(){
    const notify = () => toast("Wow so easy !");

    return (
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
    );
  }

```
### Features
- Easy to set up for real, you can make it work in less than 10sec!
- Super easy to customize
- RTL support
- Swipe to close 
- Can choose swipe direction
- Super easy to use an animation of your choice. Works well with animate.css for example
- Can display a react component inside the toast!
- Has onOpen and onClose hooks. Both can access the props passed to the react component rendered inside the toast
- Can remove a toast programmatically
- Define behavior per toast
- Pause toast when the window loses focus 
- Fancy progress bar to display the remaining time
- Possibility to update a toast
- You can control the progress bar a la nprogress 
- You can limit the number of toast displayed at the same time

### Dark mode 
- Step 1: Before moving further, firstly we have to install the react-toastify module, by running the following command in your project directory, with the help of the terminal in your src folder or you can also run this command in Visual Studio Code’s terminal in your project folder. 
- npm add react-toastify
- Step 2: After installing the react-toastify module, now open your app.js file which is present inside your project directory, under the src folder, and delete code preset inside it.
- Step 3: Now import react-toastify module, toastify CSS file, and a caller method of toast notification.
- Step 4: In your app.js file, add this code to import the toastify-modules by adding the below code in your app.js 

```javascript
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
```