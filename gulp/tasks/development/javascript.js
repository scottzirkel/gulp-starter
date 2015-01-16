var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    config  = require('../../config').javascript;

gulp.task('javascript', function () {
  gulp.src(config.src)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.dest));
});
