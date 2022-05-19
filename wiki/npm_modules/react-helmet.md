# react-helmet
### Installation
**With npm:**

`$npm install --save react-helmet`
**with yarn**
`yarn add react-helmet`

React Helmet is a component to dynamically manage the document's head section. Some common use cases include setting the title , description , and meta tags for the document. When combined with server-side rendering, it allows you to set meta tags that will be read by search engines and social media crawlers.

This reusable React component will manage all of your changes to the document head.
Helmet takes plain HTML tags and outputs plain HTML tags. It's dead simple, and React beginner friendly.

```javascript
import React from "react";
import {Helmet} from "react-helmet";
 
class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
    );
  }
};
```
Nested or latter components will override duplicate changes

```javascript
<Parent>
    <Helmet>
        <title>My Title</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
 
    <Child>
        <Helmet>
            <title>Nested Title</title>
            <meta name="description" content="Nested component" />
        </Helmet>
    </Child>
</Parent>
```
### Features
- Supports all valid head tags: title, base, meta, link, script, noscript, and style tags.
- Supports attributes for body, html and title tags.
- Supports server-side rendering.
- Nested components override duplicate head changes.
- Duplicate head changes are preserved when specified in the same component (support for tags like "apple-touch-icon").
- Callback for tracking DOM changes.

### Compatibility
Helmet 5 is fully backward-compatible with previous Helmet releases, so you can upgrade at any time without fear of breaking changes. We encourage you to update your code to our more semantic API, but please feel free to do so at your own pace.
