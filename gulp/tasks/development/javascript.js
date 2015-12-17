var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    reload      = require('browser-sync').reload,
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps'),
    config      = require('../../config').javascript;

gulp.task('javascript', function () {
  return gulp.src(config.src)
    .pipe(concat('app.js'))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}));
});
