var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    config      = require('../../config').javascript;

gulp.task('pub:javascript', function () {
  return gulp.src(config.src)
    .pipe(concat('app.js'))
    .pipe(uglify({preserveComments: 'license'}))
    .pipe(gulp.dest(config.dest));
});
