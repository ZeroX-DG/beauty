const gulp = require('gulp');
const browserSync = require('browser-sync');
const config = require('./tasks/config');

// load tasks

const scssTask = require('./tasks/scss');
const jsTask = require('./tasks/JavaScript');
const fontsTask = require('./tasks/fonts');
const lintTask = require('./tasks/lint');

// register tasks

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: ['./test/html', './dist']
    }
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload()
});

gulp.task('scss', scssTask);
gulp.task('js', jsTask);
gulp.task('fonts', fontsTask);
gulp.task('lint', lintTask);

// default task

gulp.task('default', [
  'lint',
  'browser-sync',
  'scss',
  'js',
  'fonts'
], function() {
  gulp.watch(config.SCSS_SOURCE + '/**/' + '*.scss', ['scss']);
  gulp.watch(config.JS_SOURCE + '/**/' + '*.js', ['js', 'lint']);
  gulp.watch(config.FONT_SOURCE + '/**/*', ['fonts']);
  gulp.watch(config.OTHER_FILES, ['bs-reload']);
});
