'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer'),
    concat        = require('gulp-concat'),
    minifyCss     = require('gulp-minify-css'),
    reload        = require('browser-sync').reload,
    rules         = require('../../config').autoprefixer,
    config        = require('../../config').sass;

gulp.task('sass', function() {
  return gulp.src(config.src)
    .pipe(sass(config.opttions).on('error', sass.logError))
    .pipe(autoprefixer(rules))
    .pipe(concat('app.min.css'))
    .pipe(sourcemaps.init())
    .pipe(minifyCss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}));
});
