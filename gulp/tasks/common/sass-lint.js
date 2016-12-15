var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint'),
    config    = require('../../config').sassLint;

gulp.task('sass-lint', function () {
  return gulp.src(config.src)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
