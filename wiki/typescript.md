# Typescript

Typescript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. Try it out at the playground, and stay up to date via our blog and Twitter account.
Find others who are using TypeScript at our community page.
### installation
`$npm install -g typescript`
TypeScript stands in an unusual relationship to JavaScript. TypeScript offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system.For example, JavaScript provides language primitives like string and number, but it doesn’t check that you’ve consistently assigned these. TypeScript does.This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs
### Types by Inference
TypeScript knows the JavaScript language and will generate types for you in many cases. For example in creating a variable and assigning it to a particular value, TypeScript will use the value as its type.
```typescript

let helloWorld = "Hello World";
```
By understanding how JavaScript works, TypeScript can build a type-system that accepts JavaScript code but has types. This offers a type-system without needing to add extra characters to make types explicit in your code. That’s how TypeScript knows that helloWorld is a string in the above example.

You may have written JavaScript in Visual Studio Code, and had editor auto-completion. Visual Studio Code uses TypeScript under the hood to make it easier to work with JavaScript

### Defining Types
You can use a wide variety of design patterns in JavaScript. However, some design patterns make it difficult for types to be inferred automatically (for example, patterns that use dynamic programming). To cover these cases, TypeScript supports an extension of the JavaScript language, which offers places for you to tell TypeScript what the types should be.

For example, to create an object with an inferred type which includes name: string and id: number, you can write:

```typescript
const user = {
  name: "Hayes",
  id: 0,
};

interface User {
  name: string;
  id: number;
}
interface User {
  name: string;
  id: number;
}
 
const user: User = {
  username: "Hayes",
Type '{ username: string; id: number; }' is not assignable to type 'User'.
  Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
};
Try
Since JavaScript supports classes and object-oriented programming, so does TypeScript. You can use an interface declaration with classes:

interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);
Try
You can use interfaces to annotate parameters and return values to functions:

function getAdminUser(): User {
  //...
}
 
function deleteUser(user: User) {
  // ...
}
```
###Composing Types
With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with unions, and with generics.
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:

```javascript
function getLength(obj: string | string[]) {
  return obj.length;
}
```


**Type	Predicate**
string	typeof s === "string"
number	typeof n === "number"
boolean	typeof b === "boolean"
undefined	typeof undefined === "undefined"
function	typeof f === "function"
array	Array.isArray(a)
```javascript
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
            
(parameter) obj: string
  }
  return obj;
}

```