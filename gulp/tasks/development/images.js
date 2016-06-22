/*
Images
Optimize & move changed images
*/
var gulp      = require('gulp'),
    changed   = require('gulp-changed'),
    reload    = require('browser-sync').reload,
    config    = require('../../config').images;

gulp.task('images', function () {
  return gulp.src(config.src)
  .pipe(changed(config.dest))
  .pipe(gulp.dest(config.dest))
  .pipe(reload({stream:true}));
});
