var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('wp:pub:build', function (callback) {
  runSequence(
    'wp:pub:sass',
    'wp:pub:javascript',
    'wp:bower',
    'wp:pub:images',
    'wp:static',
    callback);
});
