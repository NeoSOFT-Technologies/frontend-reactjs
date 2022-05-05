# husky
Husky improves your commits and by running script or performing some action on the files at the time of  pre and post commit. consider you want to build the code the commit or perfrom lint before pull that is when husky come in picture.

# installation 
```
npm install husky -D
```
# Usage

Inside of our package.json file, create a new property called husky with an empty object.

```json
"husky": {}
```
You can add this really wherever you want in the package.json file, but I’m going to add it right below the scripts  property so I can more easily manage them together.

Inside of that, we want to add another property called hooks that also specifies an empty object:
```json
"husky": {
  "hooks": {}
}
```
This is where we’re going to add our Git hooks. Husky supports pretty much all Git hooks defined by Git, so we can be as flexible we would like within our Git event flow.

To test this out, I created a new branch where I literally added every Git hook from that page including a script that simply writes to the terminal [Husky] event name.

Note: don’t feel like you need to do this unless you’re curious. The goal is to be able to show you with my example how it works.

```json
"husky": {
  "hooks": {
    "applypatch-msg": "echo \"[Husky] applypatch-msg\"",
    "pre-applypatch": "echo \"[Husky] pre-applypatch\"",
    "post-applypatch": "echo \"[Husky] post-applypatch\"",
    "pre-commit":"echo \"[Husky] pre-commit\"",
    }
    }
 ```
What this will do is tell Husky that at every single stage where we’re permitted to hook into Git, tell us!

When I commit that change, we can immediately see that Husky fires off some of our scripts.