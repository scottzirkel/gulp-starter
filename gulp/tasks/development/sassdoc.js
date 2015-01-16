var gulp    = require('gulp'),
    sassdoc = require('sassdoc'),
    config  = require('../../config').sassdoc;

gulp.task('sassdoc', function () {
  sassdoc.logger.enabled = config.options.verbose;
  return sassdoc.documentize(config.src, config.dest, config.options);
});
