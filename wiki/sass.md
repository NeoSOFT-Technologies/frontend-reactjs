# Sass
Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml
# installation 
You can install Sass globally using `npm install -g` sass which will provide access to the sass executable. You can also add it to your project using `npm install --save-dev `sass. This provides the executable as well as a library:.
### Installation
`$npm i sass`
### Note:

```javascript
const sass = require('sass');

const result = sass.compile(scssFilename);

// OR

// Note that `compileAsync()` is substantially slower than `compile()`.
const result = await sass.compileAsync(scssFilename);
```
# features of sass

- ### Reference symbol ( & )

You might be familiar with the reference symbol, which allows you to reference a parent element as such:
```css
.block { 
  &.red { 
      color: red;
  }
}
````
Note that you can also put the symbol after a selector which can be useful to combat some IE related issues:
```css
.block{
  .ie7 &.red{
      color: green;
  }
}
```
- ### Partials and @import directive

There exists a convention in the rails world where one adds a controller name and controller action to a body tag or site #main tag. This is good of course, but sometimes developers tend to reflect the html structure inside css in the wrong way, which can cause clutter and problems with overqualified selectors:
```css
.posts{
  &.show{
    div.posts_list{
      div.post{
        background: whitesmoke;
        p.post_title{
          font-size: 16px;
        }
      }
    }
  }
}
```
I’ve found that it’s best to avoid nesting selectors to make the code more modular. Personally, I believe that we should nest no deeper than the third level. I also like to divide my code into smaller particles and group them up like so:
```css
    +-modules
    | +-_post.scss
    +-view
    |   +-views.scss
    |   +-rails_views
    |     +-_posts_controller.scss
    |   +-responsive
    |     +-tablet
    |     +-mobile
    .

/*  _posts_controller.scss */
.posts{
  &.show{
    .post { 
      /* view specific styles */
    }
  }
}

/*  _post.scss */
.post {
  background: whitesmoke;
}
  .post__title{ 
    font-size: 16px;
  }

/* application.scss */

// @import 'modules/*';
// @import 'rails_views/posts/views';
```
Sass code will evaluate into this simple css:
```css
/*  _posts_controller.scss */
.posts.show .post {
  /* view specific styles */
}

/* _post.scss */
.post {
  background: whitesmoke;
}

  .post__title {
    font-size: 16px;
  }
```
Also, this method helps to abstract and keep other code bits separated (for mixins, settings (defined variables), etc.)

- ### Interpolation
We can define an element in a variable and interpolate it inside our sass code. This is useful when you keep your modules in separated files:
```css
$el : "post";
.#{$el} { 
    background: blue;
    & .#{$el}__title {
        background: red;
    }
}
```
Note that this is only good if we want to nest elements inside each other. Personally, I like BEM syntax and prefer to ‘nest’ selectors using indentation to reflect the html structure.
```css
/* _post.scss */
$el : "post";
.#{$el} { 
  background: blue;
}
  .#{$el}__title {
    background: red;
  }
```
You can read more about BEM on Harry Roberts blog here.
- ### @content directive
Since SASS 3.2.0 we can pass a code block into a mixin:
```css
@mixin you-can-do-it {
    @content;
}

@include you-can-do-it {
  .yes-you-can { color: red }
}
```
This can be very helpful in situations where content depends on what you are fighting with:
```css
@mixin fight-with($monster) {
  @if $monster == mechagodzilla {
    .post__title{ &:after { @content } }
  }
  @else if $monster == spacegodzilla {
    @content; 
  }
}

.post--mechagodzilla {
  @include fight-with(mechagodzilla) { content: 'fight with lightning' }
}
.post--spacegodzilla {
  @include fight-with(spacegodzilla) { content: 'fight with Armageddon'; .post_title:after{ content: ":)"} }
}
```
And of course when struggling with devices and resolutions - more on that subject can be found here.

- ### %placeholders
Placeholders available since SASS 3.2.0 are useful when you want to write styles that were meant to be extended but you don’t want the base styles to be seen in output css styles (in opposite to extending classes).
```css
%post-skeletor{ 
    font:{ size: 12; weight: 700;}
    box-sizing: border-box;
    padding: 5px;
    margin: 10px;
    border: 1px solid whitesmoke;
}

.post-class {
    font:{ size: 12; weight: 700;}
    box-sizing: border-box;
    padding: 5px;
    margin: 10px;
    border: 1px solid whitesmoke;
}

.post1--extends__placeholder {
    @extend %post-skeletor;
    background: yellow;
}

.post1--extends_class{
    @extend .post-class;
    background: yellow;
}
```
Great example of placeholder usage as Ian Storm Taylor mentioned is the ‘golden child’ of OOCSS - media object. You can read his article about OOCSS and using placeholders here.

- ### Functions
Sass has a build in set of functions some of them are related to color, some of them are related to strings and some of them are related to numbers.
```css
.post--big{
  width: percentage(.5);
  font-size: max(12px, 14px, 16px);
  background: rgba(231, 0.8, 2, .8);
}

$title: 'This is title';
.post__title{
  content: quote($title);
}
```
You can also define your own functions like so:
```css
@function double($variable){
 @return $variable *2;
}

.post{
  font-size: double(2px);
}
```
- ### Lists and @each directive
Lists are an old feature of Sass, alone they can’t do much on their own.
```css
$font-list: Helvetica, Arial, sans-serif;

.post {
    font-family: $font-list;
}
```
However when combined with list functions (join, lenght, nth, append) and @each directive things get more interesting, perfect example for list usage are sprite icons.
$icons: smile, poop, godzilla;
```css
@each $icon in $icons {
  .icon-#{$icon} { background-image: url('/icons/#{$icon}.png') }   
}
```