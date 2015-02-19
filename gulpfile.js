var gulp = require('gulp'),
	path = require('path'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	connect = require('gulp-connect');

// A simple hhtp server
gulp.task('connect', function() {
	connect.server({
		port: 3000
	});
});


gulp.task('style', function(){
	return gulp.src('./public/styles/master.scss')
		.pipe(watch('./public/styles/*.scss'))
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('./public/styles/'));
});




// Processes styles.less and spits out styles.css
gulp.task('sass', function () {
	gulp.src('./public/styles/master.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('./public/styles/'));
});

// Watches the less files and reprocresses styles.less upon change
gulp.task('watch', function(){
	watch('./public/styles/*.scss', function(){
		gulp.start('sass');
	})
});


gulp.task('run', ['connect', 'style']);

gulp.task('serve', ['sass', 'connect', 'watch']);