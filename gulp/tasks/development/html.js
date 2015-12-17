var gulp  = require('gulp'),
    pre   = require('gulp-preprocess'),
    reload  = require('browser-sync').reload,
    config  = require('../../config').html;

gulp.task('html', function () {
  return gulp.src(config.src)
  .pipe(pre())
  .pipe(gulp.dest(config.dest))
  .pipe(reload({stream:true}));
});
