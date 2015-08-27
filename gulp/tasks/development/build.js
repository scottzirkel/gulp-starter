var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', ['clean'], function (callback) {
  runSequence(
    'scss-lint',
    [
      'html',
      'sass',
      'javascript',
      'bower:css',
      'bower:js',
      'images'
    ],
    callback);
});
