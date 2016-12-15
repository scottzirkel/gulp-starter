var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('wp:build', function (callback) {
  runSequence(
    'wp:sass',
    'wp:javascript',
    'wp:bower',
    'wp:images',
    callback);
});
