var gulp  = require('gulp'),
    pre   = require('gulp-preprocess')
    config  = require('../../config').html;

gulp.task('html', function () {
  gulp.src(config.src)
  .pipe(pre())
  .pipe(gulp.dest(config.dest));
});
