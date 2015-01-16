// var gulp    = require('gulp'),
//     del     = require('del'),
//     config  = require('../../config').clean;
//
// gulp.task('clean', function () {
//   del(config.src, config.options, function (err) {
//     if (err)
//       throw err;
//   });
// });

var gulp    = require('gulp'),
rimraf     = require('rimraf'),
config  = require('../../config').clean;

gulp.task('clean', function (cb) {
  rimraf(config.src, function (err) {
    cb(err);
  });
});
