/*
  Browser Sync
  Refresh the updated files in the browser automatically
*/
var gulp        = require('gulp'),
    browsersync = require('browser-sync'),
    config      = require('../../config').browsersync.development;

gulp.task('browsersync', ['build'], function () {
  browsersync(config);
});
