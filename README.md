# Gulp Starter

This gulp starter is based off the work of [greypants](https://github.com/greypants/gulp-starter).
It is customized to my workflow, but can be adapted to most any.

## Setup

I am using the following setup for my file structure:

```
+ app
+ gulp
- .bowerrc
- bower.json
- gulpfile.js
- package.json
```

## Bower

Bower installs to the `app/_componets` folder, this is
configurable in the `.bowerrc file`. If this is changed, also update it in your `package.json`. Install with

```
bower install
```

## Gulp

You'll need to have [Node](http://node.js) installed to run gulp. Additionally, gulp must be installed globally.

Gulp is split across several files in the `gulp` directory. Install Gulp with

```
npm install
```

If you wish to change the file structure, update `gulp/config.js` to reflect those changes. Additionally, all task configs are located in this file.

All gulp tasks have their own file. The build tasks are located in `gulp/development`. The production ready tasks are located in `gulp/production`.

To build files and start the server run:

```
gulp
```

To build production files and preview them, run:

```
gulp publish
```
