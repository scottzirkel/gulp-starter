var gulp      = require('gulp'),
    usemin    = require('gulp-usemin'),
    uglify    = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    config    = require('../../config').staging;

gulp.task('css', function() {
  gulp.src(config)
    .pipe(usemin({
      assetsDir: config.src,
      css: [minifyCss(), 'concat'],
      js: [uglify(), 'concat']
    }))
    .pipe(gulp.dest(config));
});
