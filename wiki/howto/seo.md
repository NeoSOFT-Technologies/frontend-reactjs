
# SEO by react-helmet

`React Helmet` is a component to dynamically manage the document’s head section. Some common use cases include setting the title, description, and meta tags for the document.

When combined with server-side rendering, it allows you to set meta tags that will be read by search engines and social media crawlers. This makes server-side rendering and React Helmet a powerful combination for creating apps that can benefit from SEO (search engine optimization) and social media data like oEmbed, Facebook Open Graph, or Twitter Cards.

### How to Add react-helmet in Project

Follow the following steps to improve SEO by using react-helmet :- 

 `Step 1` :  Step 1 — Adding React Helmet to Your Project

First, install the component into your project:
```
npm install react-helmet
```
Now you can use React Helmet in your app by adding the elements that should go in the head of the document as children to the Helmet component

`Step 2` :  import `Helmet` XML tag in your component.
```
import { Helmet } from 'react-helmet';
```

`Step 3` : Enclose all your meta tags and title you want for the specific page.

At the end your component should look something like this:-
```
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>App Title</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
    </div>
  );
}

export default App;
```
Congrats You have successfully implented react-helmet to your application


