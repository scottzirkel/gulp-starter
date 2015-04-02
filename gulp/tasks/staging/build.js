var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build:staging', ['clean'], function (callback) {
  runSequence(
    'html',
    'compass',
    'javascript',
    'bower:css',
    'bower:js',
    'images',
    // run any staging specific tasks.
    // optimize css/js or whatever
    callback);
});
