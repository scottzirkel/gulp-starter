/*
Images
Optimize & move changed images
*/
var gulp        = require('gulp'),
    changed     = require('gulp-changed'),
    browsersync = require('browser-sync'),
    config      = require('../../config').images;

gulp.task('images', function () {
  gulp.src(config.src)
  .pipe(changed(config.dest))
  .pipe(gulp.dest(config.dest));
});
