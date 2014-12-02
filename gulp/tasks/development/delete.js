/*
  Delete
  Helper to delete files (ie: build files) so they do not get recompiled.
*/
var gulp    = require('gulp'),
    del     = require('del'),
    config  = require('../../config').delete;

gulp.task('delete', function (callback) {
  del(config.src, callback);
});
