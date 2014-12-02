/*
  RSync
  Boy band that keeps the revisions synced.
*/
var gulp    = require('gulp'),
    rsync   = require('gulp-rsync'),
    config  = require('../../config').rsync;

gulp.task('rsync', function () {
  return gulp.src(config.src)
    .pipe(rsync(config.options));
});
