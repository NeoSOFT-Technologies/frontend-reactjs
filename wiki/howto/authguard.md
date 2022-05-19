
# How To Use AuthGuard
Authguard is a utility component implemented in `src/components`. It protects your component from being accessed by a unauthenticated user.

### How does authguard works internally
`protect` method is implemented in AuthGuard class. It takes the `component` and the authenticated state as arguments. It then checks the `authentication state`. If the user is authenticated then returns the `component` passed otherwise it returns the `error component` which was passed in the constructor while creating the authguard object.

Follow the following steps to protect your  protected component from a unauthenticated request :- 

 `Step 1` :  Import the AuthGuard from `src/components/auth-guard/AuthGuard` in your parent component.

```
import AuthGuard from "<path to auth-guard folder>/auth-guard/AuthGuard.js"
```

> Note - change "path to auth-guard folder" by suitable path

`Step 2` :  Create a object of auth-guard and pass the error component in constructor
```
const authGuard = new AuthGuard(<h1>Unauthenticated</h1>);
```

`Step 3` : Call the `protect` method in your JSX and pass the protected component and authentication state as an arguments.
```
return (
	...
	...
	{authGuard.proctect(<Protected Component />, isAuthenticated)}
	...
)
```
Voila🥳🥳....your component is now protected from unauthenticated user.


