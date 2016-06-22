# Gulp Starter

This is my current starting point for building websites. I'll be adding to it as I can.

**Fair warning!** It is very much a work in progress at this point.

## Setup

I am using the following setup for my file structure:

```
+ src
  + html
    + templates
      - footer.html
      - header.html
    - index.html
  + sass
    + base
     - _normalize.scss
     - _skeleton.scss
     - _typographic.scss
     - _typography.scss
    + components
     - _buttons.scss
     - _forms.scss
     - _lists.scss
     - _marketing.scss
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
  + scripts
  + images
  + static

+ gulp
  + tasks
    + development
    - default.js
  -config.js
- .bowerrc
- bower.json
- .editorconfig
- gulpfile.js
- package.json
- scsslint.yml
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

To build files and start the server run:

```
gulp
```

To build production files and preview them, run:

```
gulp publish
```

### WordPress

For WordPress installs it is much the same, with the logic being that you'll keep your source files out of your theme folder. To run Gulp with WordPress, simply edit the theme path in `gulp/config.js`

My WordPress builds change the `wp-content` folder to public and all of the WP files in an `app` folder. I like to keep everything separated as well as it gives the site a tad more security.

To build development files:

```
gulp wp
```

To build production files run:

```
gulp wp:publish
```
