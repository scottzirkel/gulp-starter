var gulp  = require('gulp'),
    pre   = require('gulp-preprocess'),
    config  = require('../../config').html;

gulp.task('pub:html', function () {
  return gulp.src(config.src)
  .pipe(pre())
  .pipe(gulp.dest(config.dest));
});
