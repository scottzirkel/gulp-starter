/*
  JSHint
  Run JSHint over js files and output errors to command line
*/
var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    config  = require('../../config').jshint;

gulp.task('jshint', function () {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
