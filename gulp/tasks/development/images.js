/*
Images
Optimize & move changed images
*/
var gulp      = require('gulp'),
    changed   = require('gulp-changed'),
    reload    = require('browser-sync').reload,
    imagemin  = require('gulp-imagemin'),
    pngquant  = require('imagemin-pngquant'),
    // mozjpeg   = require('imagemin-mozjpeg'),
    jpegtran   = require('imagemin-jpegtran'),
    config    = require('../../config').images;

gulp.task('images', function () {
  return gulp.src(config.src)
  .pipe(changed(config.dest))
  .pipe(imagemin({
    progressive: true,
    optimizationLevel: 7,
    use: [
      pngquant(),
      // mozjpeg({quality: 60}) MOZJPEG was having issues
      jpegtran({progressive: true})
    ]
  }))
  .pipe(gulp.dest(config.dest))
  .pipe(reload({stream:true}));
});
