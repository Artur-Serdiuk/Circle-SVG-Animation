const gulp = require('gulp');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglifyjs = require('gulp-uglifyjs');

gulp.task('scripts', function () {
	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js'
	])
		.pipe(concat('libs.min.js'))
		.pipe(uglifyjs())
		.pipe(gulp.dest('src/js'));
});

gulp.task('livereload', function () {
	browserSync({
		server: {
			baseDir: 'src'
		}
	});
});

gulp.task('watch', ['livereload'], function () {
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);