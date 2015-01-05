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
    csscomb       = require('gulp-csscomb'),
    config        = require('../../config');

gulp.task('sass', function () {
  var sassConfig = config.sass.options;
  sassConfig.onError = browsersync.notify;

  var filter = gulpFilter(['*.css', '!*.map']);

  browsersync.notify('Compiling Sass');

  return gulp.src('app/_assets/scss/core.scss')
    .pipe(plumber())
    .pipe(sass(sassConfig))
    .pipe(csscomb())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(filter)
    .pipe(sourcemaps.write('./maps', { includeContent: false }))
    .pipe(filter.restore())
    .pipe(gulp.dest(config.sass.dest));
});
