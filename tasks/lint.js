const gulp = require('gulp'),
      eslint = require('gulp-eslint')
      plumber = require('gulp-plumber');

const config = require('./config');

module.exports = function() {
  return gulp.src([config.JS_SOURCE + '/**/*.js','!node_modules/**'])
        .pipe(eslint())
        .pipe(plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
          }}))
        .pipe(eslint.format('codeframe'));
}
