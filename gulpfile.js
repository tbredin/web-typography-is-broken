/**
 * Install Slurpee
 * https://github.com/StudioThick/slurpee
 */

var gulp = require('gulp');

var config = require('config');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

require('slurpee');

gulp.task('icons:rename', function() {
    gulp.src("./app/templates/Includes/icon-sprite.svg")
      .pipe($.rename("/app/templates/Includes/Icons.ss"))
      .pipe(gulp.dest("."));
});

gulp.task('build', ['images', 'icons', 'icons:rename', 'styles', 'vendor', 'scripts', 'modernizr', 'fonts']);

gulp.task('default', ['build']);

gulp.task('develop', ['build'], function() {
    gulp.start('serve');
    gulp.start('watch');
});