/*
  Revision
  Give assets revision numbers for caching purposes.
*/
var gulp    = require('gulp'),
    rev     = require('gulp-rev'),
    config  = require('../../config').revision;

gulp.task('revision', function () {
  return gulp.src(config.src.assets, { base: config.src.base })
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev())
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev.manifest({ path: config.dest.manifest.name }))
    .pipe(gulp.dest(config.dest.manifest.path));
});
