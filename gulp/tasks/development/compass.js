/*
  Compass
  Compile SASS using gulp-compass
*/

var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    browsersync   = require('browser-sync'),
    compass       = require('gulp-compass'),
    gulpFilter    = require('gulp-filter'),
    autoprefixer  = require('gulp-autoprefixer'),
    sourcemaps    = require('gulp-sourcemaps'),
    csscomb       = require('gulp-csscomb'),
    config        = require('../../config');

gulp.task('compass', function () {
  browsersync.notify('Compiling Sass via Compass');

  var filter = gulpFilter(['*.css', '!*.map']);

  var compassConfig = config.compass;
  compassConfig.onError = browsersync.notify;

  return gulp.src('app/_assets/scss/**/*.{scss,sass}')
    .pipe(plumber())
    .pipe(compass(compassConfig))
    .pipe(csscomb())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(filter)
    .pipe(sourcemaps.write('.', { includeContent: false }))
    .pipe(filter.restore())
    .pipe(gulp.dest(config.compass.dest));
});
