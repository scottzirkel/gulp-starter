var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('staging', function () {
  runSequence(
    'deploy:staging'
    );
});
