var gulp    = require('gulp'),
    config  = require('../../config').watch;

gulp.task('wp:watch', function () {
  gulp.watch(config.bower, ['wp:bower']);
  gulp.watch(config.images, ['wp:images']);
  gulp.watch(config.javascript, ['wp:javascript']);
  gulp.watch(config.sass, ['wp:sass']);
  gulp.watch(config.static, ['wp:static']);
});
