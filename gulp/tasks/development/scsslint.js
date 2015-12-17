var gulp      = require('gulp'),
    scsslint  = require('gulp-scss-lint'),
    config    = require('../../config').scsslint;

gulp.task('scss-lint', function () {
  gulp.src(config.src)
    .pipe(scsslint({"config": "scsslint.yml"}));
});
