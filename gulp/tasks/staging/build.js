var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build:staging', ['clean'], function (callback) {
  runSequence(
    'build',
    // run any staging specific tasks.
    // optimize css/js or whatever
    callback);
});
