/*
  Susy
  Copy sass files from app/_components/susy into sass app/_assets/sass/_susy.scss
*/

var gulp    = require('gulp'),
    config  = require('../../config').susy;

gulp.task('susy', function () {
  return gulp.src(config.src)
  .pipe(gulp.dest(config.dest));
});
