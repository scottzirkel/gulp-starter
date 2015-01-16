var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    config  = require('../../config').bower;

gulp.task('bower:css', function () {
  gulp.src(config.css.src)
    .pipe(concat('dependencies.css'))
    .pipe(gulp.dest(config.css.dest));
});

gulp.task('bower:js', function () {
  gulp.src(config.js.src)
    .pipe(concat('dependencies.js'))
    .pipe(gulp.dest(config.js.dest));
});
