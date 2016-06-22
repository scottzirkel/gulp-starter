var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps'),
    config      = require('../../config').javascript.wp;

gulp.task('wp:pub:javascript', function () {
  return gulp.src(config.src)
    .pipe(concat('app.js'))
    .pipe(uglify({preserveComments: 'license'}))
    .pipe(gulp.dest(config.dest));
});
