var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('wp:build', function (callback) {
  runSequence(
    'scss-lint',
    [
      'wp:sass',
      'wp:javascript',
      'wp:bower',
      'wp:images'
    ],
    callback);
});
