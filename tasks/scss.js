const gulp = require('gulp'),
      plumber = require('gulp-plumber');

const sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      rename = require('gulp-rename');

const browserSync = require('browser-sync');
const config = require('./config');


module.exports = function() {
  gulp.src(config.SCSS_SOURCE + '/*.scss')
      .pipe(
        plumber({
          errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
          }
        })
      )
      .pipe(sass())
      .pipe(autoprefixer('last 2 versions'))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({suffix: config.SCSS_MINIFICATION_SUFFIX}))
      .pipe(gulp.dest(config.SCSS_DESTINATION))
      .pipe(browserSync.reload({stream:true}));
}
