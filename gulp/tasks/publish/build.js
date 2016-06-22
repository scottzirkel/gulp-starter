var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('pub:build', ['clean'], function (callback) {
  runSequence(
    'scss-lint',
    [
      'pub:html',
      'pub:sass',
      'pub:javascript',
      'bower',
      'pub:images',
      'static'
    ],
    callback);
});
