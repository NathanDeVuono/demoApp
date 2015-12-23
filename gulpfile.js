var gulp = require('gulp');
var scss = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var server = require('gulp-server-livereload');

var paths = {
  scripts: ['src/js/**/*.js', '!external/**/*.js'],
  scss: 'src/scss/**/*.scss',
  index: 'src/index.html'
};

gulp.task('clean-scripts', function() {
  return del(['build/js']);
});

gulp.task('clean-scss', function() {
  return del(['build/css']);
});

gulp.task('clean-index', function() {
  return del(['build/index.html']);
});

gulp.task('scripts', ['clean-scripts'], function() {
  return gulp.src(paths.scripts)
    .pipe(jshint(paths.scripts))
    .pipe(sourcemaps.init())
      .pipe(concat('app.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

gulp.task('scss', ['clean-scss'], function() {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(scss().on('error', scss.logError))
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'));
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      defaultFile: 'build/index.html',
      open: false
    }));
});

gulp.task('copy-index', function() {
  gulp.src(paths.index)
    .pipe(gulp.dest('build'));
});

gulp.task('index', ['scripts', 'scss', 'clean-index', 'copy-index'], function () {
  var sources = gulp.src(['build/**/*.js', 'build/**/*.css'], {read: false});
 
  return gulp.src('src/index.html')
    .pipe(inject(sources))
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.index, ['index']);
});

gulp.task('default', ['watch', 'index', 'webserver']);