/*
  Sass
  Compile sass into css
*/

var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    browsersync   = require('browser-sync'),
    sass          = require('gulp-sass'),
    gulpFilter    = require('gulp-filter'),
    autoprefixer  = require('gulp-autoprefixer'),
    sourcemaps    = require('gulp-sourcemaps'),
    config        = require('../../config');

gulp.task('sass', function () {
  var sassConfig = config.sass.options;
  sassConfig.onError = browsersync.notify;

  var filter = gulpFilter(['*.css', '!*.map']);

  browsersync.notify('Compiling Sass');

  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sass(sassConfig))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(filter)
    .pipe(sourcemaps.write('.', { includeContent: false }))
    .pipe(filter.restore())
    .pipe(gulp.dest(config.sass.dest));
});
