var gulp        = require('gulp'),
    util        = require('gulp-util'),
    runSequence = require('run-sequence');

gulp.task('staging', function () {
  runSequence(
    ['build'],
    'deploy:staging',
    callback);
});
