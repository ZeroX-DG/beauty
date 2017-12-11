const gulp = require('gulp'),
      plumber = require('gulp-plumber');

const uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename');

const browserSync = require('browser-sync');
const config = require('./config');


module.exports = function() {
  return gulp.src(config.JS_SOURCE + '/**/*.js')
        .pipe(plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(concat(config.FRAMEWORK_NAME + '.js'))
        .pipe(rename({suffix: config.JS_MINIFICATION_SUFFIX}))
        .pipe(uglify())
        .pipe(gulp.dest(config.JS_DESTINATION))
        .pipe(browserSync.reload({stream:true}))
}
