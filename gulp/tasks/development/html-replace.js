/*
  HTML Replace
  Replace blocks with HTML
  https://github.com/VFK/gulp-html-replace
*/

var gulp    = require('gulp'),
    config  = require('../../config').htmlreplace;

gulp.task('htmlreplace', function () {
  gulp.src(config.src)
    .pipe(htmlreplace(config.options))
    .pipe(gulp.dest(config.dest));
});
