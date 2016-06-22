var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    sourcemaps  = require('gulp-sourcemaps'),
    config      = require('../../config').javascript.wp;

gulp.task('wp:javascript', function () {
  return gulp.src(config.src)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.dest));
});
