/*
Images
Optimize & move changed images
*/
var gulp      = require('gulp'),
    changed   = require('gulp-changed'),
    imagemin  = require('gulp-imagemin'),
    config    = require('../../config').images.wp;

gulp.task('wp:pub:images', function () {
  return gulp.src(config.src)
  .pipe(changed(config.dest))
  .pipe(imagemin([
    imagemin.jpegtran(),
    imagemin.optipng(),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest(config.dest));
});
