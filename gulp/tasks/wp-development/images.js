/*
Images
Optimize & move changed images
*/
var gulp      = require('gulp'),
    changed   = require('gulp-changed'),
    config    = require('../../config').images.wp;

gulp.task('wp:images', function () {
  return gulp.src(config.src)
  .pipe(changed(config.dest))
  .pipe(gulp.dest(config.dest));
});
