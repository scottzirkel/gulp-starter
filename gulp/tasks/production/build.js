/*
Build
Define the build sequence, if specificity is needed
*/

var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build:production', function (callback) {
  runSequence('delete',
  [
    'sass',
    'scripts',
    'images'
  ],
  'base64',
  [
    'optimize:css',
    'optimize:js',
    'optimize:images',
    'optimize:html'
  ],
  'revision',
  'rev:collect',
  callback);
});
