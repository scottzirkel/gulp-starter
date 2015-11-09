var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    config  = require('../../config').bower;

gulp.task('bower', function () {
  gulp.src(config.src)
  .pipe(gulp.dest(config.dest));
});
