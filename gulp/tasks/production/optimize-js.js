/*
  Optimize JS
  Uglify & reduce filesize of JS
*/

var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    size    = require('gulp-size'),
    config  = require('../../config').optimize.js;

gulp.task('optimize:js', function () {
  return gulp.src(config.src)
    .pipe(uglify(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
