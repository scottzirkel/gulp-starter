/*
  Scss Lint
  Lint Sass/Scss files
*/

var gulp      = require('gulp'),
    scsslint  = require('gulp-scss-lint'),
    config    = require('../../config').scsslint;

// Requires scss-lint gem to be installed
// TODO: rewrite to lose gem dependencies

gulp.task('scsslint', function () {
  return gulp.src(config.src)
    .pipe(scsslint());
});
