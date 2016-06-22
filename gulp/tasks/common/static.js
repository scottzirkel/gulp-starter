var gulp  = require('gulp'),
    pre   = require('gulp-preprocess'),
    reload  = require('browser-sync').reload,
    config  = require('../../config').static;

gulp.task('static', function () {
  return gulp.src(config.src)
  .pipe(pre())
  .pipe(gulp.dest(config.dest))
  .pipe(reload({stream:true}));
});
