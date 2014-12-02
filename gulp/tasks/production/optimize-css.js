/*
  Optimize CSS
  Optimize the CSS after it has been converted from SASS
*/

var gulp      = require('gulp'),
    minifycss = require('gulp-minify-css'),
    size      = require('gulp-size'),
    config    = require('../../config').optimize.css;

gulp.task('optimize:css', function () {
  return gulp.src(config.src)
    .pipe(minifycss(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
