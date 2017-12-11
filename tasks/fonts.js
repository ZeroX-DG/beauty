const gulp = require('gulp'),
      plumber = require('gulp-plumber');

const config = require('./config');

let font_source_list = config.FONT_EXTENSIONS.map(
  extension => config.FONT_SOURCE + '/**/*' + extension
);

module.exports = function() {
  return gulp.src(font_source_list)
        .pipe(gulp.dest(config.FONT_DESTINATION));
}
