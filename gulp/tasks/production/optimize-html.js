var gulp    = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    config  = require('../../config').optimize.html;

gulp.task('optimize:html', function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
