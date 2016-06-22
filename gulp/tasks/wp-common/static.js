var gulp  = require('gulp'),
    pre   = require('gulp-preprocess'),
    config  = require('../../config').static.wp;

gulp.task('wp:static', function () {
  return gulp.src(config.src)
  .pipe(pre())
  .pipe(gulp.dest(config.dest));
});
