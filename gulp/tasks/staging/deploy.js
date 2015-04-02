var gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('deploy:staging', shell.task([
  'shipit staging deploy'
]));
