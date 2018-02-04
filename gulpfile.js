var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	cleancss = require('gulp-clean-css'),
	util = require('gulp-util'),
	log = util.log;

gulp.task('sass', function() {
	log( 'Generate CSS files ' + ( new Date()).toString() );
	gulp.src('assets/sass/*.scss' )
		.pipe( sass() )
		.pipe( cleancss() )
		.pipe( gulp.dest('dist/css' ) );
} );

gulp.task('js', function() {
	log( 'Uglify JS files ' + ( new Date()).toString() );
	gulp.src('assets/scripts/*.js' )
		.pipe( uglify() )
		.pipe( gulp.dest('dist/js' ) );
} );

gulp.task('watch', function() {
	gulp.watch('assets/sass/**/*.scss', ['sass'] );
	gulp.watch( 'assets/scripts/*.js', ['js'] );
});

