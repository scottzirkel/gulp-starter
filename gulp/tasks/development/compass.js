var gulp    = require('gulp'),
    compass = require('gulp-compass'),
    concat  = require('gulp-concat'),
    reload  = require('browser-sync').reload,
    gutil   = require('gulp-util'),
    plumber = require('gulp-plumber'),
    config  = require('../../config').compass;

var onError = function (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
};

gulp.task('compass', function () {
  gulp.src(config.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(compass({
      css: 'build/assets/css',
      sass: 'app/sass',
      require: config.require
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}));
});
