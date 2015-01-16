var gulp    = require('gulp'),
    config  = require('../../config').watch;

gulp.task('watch', ['browsersync'], function () {
  gulp.watch(config.sass, ['compass']);
  gulp.watch(config.html, ['html']);
  gulp.watch(config.images, ['images']);
});
