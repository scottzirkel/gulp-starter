/*
  Watch
  Night gathers, and now my watch begins. It shall not end until my death.
  I shall take no wife, hold no lands, father no children.
  I shall wear no crowns and win no glory. I shall live and die at my post.
  I am the sword in the darkness. I am the watcher on the walls.
  I am the shield that guards the realms of men.
  I pledge my life and honor to the Night's Watch, for this night and all the nights to come.
*/

var gulp    = require('gulp'),
    config  = require('../../config').watch;

gulp.task('watch', ['browsersync'], function () {
  gulp.watch(config.sass,     ['sass', 'scsslint']);
  gulp.watch(config.scripts,  ['scripts', 'jshint']);
  gulp.watch(config.images,   ['images']);
  gulp.watch(config.htmlreplace,  ['htmlreplace']);
});
