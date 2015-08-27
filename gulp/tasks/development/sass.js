'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer'),
    reload        = require('browser-sync').reload,
    config        = require('../../config').sass;

gulp.task('sass', function() {
  return gulp.src(config.src)
    .pipe(sass(config.opttions).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}));
});
