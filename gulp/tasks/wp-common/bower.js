var gulp    = require('gulp'),
    config  = require('../../config').bower.wp;

gulp.task('wp:bower', function () {
  return gulp.src(config.src)
  .pipe(gulp.dest(config.dest));
});
