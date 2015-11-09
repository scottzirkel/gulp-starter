# Gulp Starter

This is my current starting point for building websites. I'll be adding to it as I can.

**Fair warning!** It is very much a work in progress at this point.

## Setup

I am using the following setup for my file structure:

```
+ app
  + html
    + templates
      - footer.html
      - header.html
    - index.html
  + sass
    + base
     - _normalize.scss
     - _typography.scss
    + layout
      - _body.scss
      - _footer.scss
      - _header.scss
      - _navigation.scss
    + utils
      - _colors.scss
      - _functions.scss
      - _mixins.scss
      - _variables.scss
    - _shame.scss
    - core.scss

+ gulp
  + tasks
    + development
    - default.js
  -config.js
- .bowerrc
- bower.json
- gulpfile.js
- package.json
- shipitfile.js
- shipitconfig.js
```

## Quick Install

To install all packages and start gulp for the first time, run

```
npm run setup
```

To run nmp & gulp

```
npm start
```

## Manual Install

### Bower

Bower installs to the `app/_componets` folder, this is
configurable in the `.bowerrc file`. If this is changed, also update it in your `package.json`. Install with

```
bower install
```

### Gulp

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
