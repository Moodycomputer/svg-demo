var gulp = require('gulp'),
	path = require('path'),
	watch = require('gulp-watch'),
	less = require('gulp-less'),
	connect = require('gulp-connect');

// A simple hhtp server
gulp.task('connect', function() {
	connect.server({
		port: 3000
	});
});

// Processes styles.less and spits out styles.css
gulp.task('less', function () {
	gulp.src('./public/styles/styles.less')
		.pipe(less())
		.pipe(gulp.dest('./public/styles/'));
});

// Watches the less files and reprocresses styles.less upon change
gulp.task('watch', function(){
	watch('./public/styles/*.less', function(){
		gulp.start('less');
	})
});


gulp.task('serve', ['less', 'connect', 'watch']);