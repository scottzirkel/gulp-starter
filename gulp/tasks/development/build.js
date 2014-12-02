/*
  Build
  Define the build sequence, if specificity is needed
*/

var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function (callback) {
  runSequence(
    'delete',
    'susy',
    [
      'sass',
      'scripts',
      'images',
    ],
    'html'
    'base64',
  callback);
});
