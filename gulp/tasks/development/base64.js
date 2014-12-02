/*
  Base 64
  Find all pngs referenced in the css that are 20k are smaller and convert them to Base64 to save filespace.
*/
var gulp    = require('gulp'),
    base64  = require('gulp-base64'),
    config  = require('../../config').base64;

gulp.task('base64', ['sass'], function () {
  return gulp.src(config.src)
    .pipe(base64(config.options))
    .pipe(gulp.dest(config.dest));
});
