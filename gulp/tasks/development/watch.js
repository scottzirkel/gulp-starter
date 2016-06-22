var gulp    = require('gulp'),
    config  = require('../../config').watch;

gulp.task('watch', ['browsersync'], function () {
  gulp.watch(config.bower, ['bower']);
  gulp.watch(config.html, ['html']);
  gulp.watch(config.images, ['images']);
  gulp.watch(config.javascript, ['javascript']);
  gulp.watch(config.sass, ['sass']);
  gulp.watch(config.static, ['static']);
});
