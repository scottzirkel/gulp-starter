var gulp    = require('gulp'),
    compass = require('gulp-compass'),
    concat  = require('gulp-concat'),
    reload  = require('browser-sync').reload,
    config  = require('../../config').compass;

gulp.task('compass', function () {
  gulp.src(config.src)
    .pipe(compass({
      css: 'build/assets/css',
      sass: 'app/sass',
      require: config.require
    }))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}));
})
