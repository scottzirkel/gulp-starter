var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', ['clean'], function (callback) {
  runSequence(
    'html',
    'sass',
    'javascript',
    'bower',
    'images',
    'static',
    callback);
});
