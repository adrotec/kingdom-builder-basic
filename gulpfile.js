var gulp = require('gulp');
var gulpShared = require('./gulpfile-shared');

gulpShared();

gulp.task('default', ['build', 'watch', 'serve']);
