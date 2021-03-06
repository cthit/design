var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

var paths = {
  scss: [
    'bower_components/foundation-sites/scss'
  ]
}

gulp.task('clean', function() {
  return gulp.src('dist').pipe(clean());
});

gulp.task('release', ['clean'], function() {
  gulp.src('src/scss/app.scss')
    .pipe(sass({ includePaths: paths.scss }).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename('digit.min.css'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['clean'], function() {
  gulp.src('src/scss/app.scss')
    .pipe(sass({ includePaths: paths.scss }).on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'))
    .pipe(browserSync.stream());

  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./build/'));
});

gulp.task('reload', ['build'], browserSync.reload);

gulp.task('default', ['build'], function() {
  browserSync.init({
    server: './build'
  });

  gulp.watch("src/scss/**/*.scss", ['reload']);
  gulp.watch('src/**/*.html', ['reload']);
});