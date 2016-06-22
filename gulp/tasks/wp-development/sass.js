'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    concat        = require('gulp-concat'),
    rules         = require('../../config').autoprefixer,
    config        = require('../../config').sass.wp;

gulp.task('wp:sass', function() {
  return gulp.src(config.src)
    .pipe(sass(config.options).on('error', sass.logError))
    .pipe(autoprefixer(rules))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest(config.dest));
});
