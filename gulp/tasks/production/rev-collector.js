/*
  Rev Collector
  Find revision number & distribute appropriately
*/

var gulp    = require('gulp'),
    collect = require('gulp-rev-collector'),
    config  = require('../../config').collect;

gulp.task('rev:collect', function () {
  return gulp.src(config.src)
    .pipe(collect())
    .pipe(gulp.dest(config.dest));
});
