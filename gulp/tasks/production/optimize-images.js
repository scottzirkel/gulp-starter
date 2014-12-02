/*
  Optimize Images
  Reduce image filesize.
*/

var gulp      = require('gulp'),
    imagemin  = require('gulp-imagemin'),
    size      = require('gulp-size'),
    config    = require('../../config').optimize.images;

gulp.task('optimize:images', function () {
  return gulp.src(config.src)
    .pipe(imagemin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
