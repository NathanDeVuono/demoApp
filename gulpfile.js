'use strict';

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
	scripts: 'src/**/*.js',
	scss: 'src/**/*.scss',
	views: 'src/**/*.html'
};

gulp.task('clean-scripts', function() {
	return del(['build/app.min.js']);
});

gulp.task('clean-scss', function() {
	return del(['build/theme.css']);
});

gulp.task('clean-views', function() {
	return del(['build/**/*.html']);
});

gulp.task('scripts', ['clean-scripts'], function() {
	return gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(sourcemaps.init())
			.pipe(concat('app.js', {newLine: '\r\n'}))
			.pipe(uglify({mangle:false}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build'));
});

gulp.task('scss', ['clean-scss'], function() {
	return gulp.src(paths.scss)
		.pipe(sourcemaps.init())
		.pipe(scss().on('error', scss.logError))
		.pipe(scss({outputStyle: 'compressed'}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build'));
});

gulp.task('webserver', function() {
	gulp.src('.')
		.pipe(server({
			livereload: true,
			directoryListing: false,
			defaultFile: 'build/index.html',
			open: false,
			host:'192.168.1.66'
		}));
});

gulp.task('copy-views', ['clean-views'], function() {
	gulp.src(paths.views)
		.pipe(gulp.dest('build'));
});


gulp.task('index', ['scripts', 'scss'], function () {
	var sources = gulp.src(['build/*.js', 'build/*.css'], {read: false});
 
	return gulp.src('src/index.html')
		.pipe(inject(sources))
		.pipe(gulp.dest('build'));
});

gulp.task('build', ['copy-views', 'index']);

gulp.task('watch', ['build'], function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.scss, ['scss']);
	gulp.watch(paths.views, ['copy-views', 'index']);
});

gulp.task('default', ['watch', 'webserver']);