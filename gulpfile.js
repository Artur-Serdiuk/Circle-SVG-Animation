const gulp = require('gulp');
const browserSync = require('browser-sync');
const minifyJs = require('gulp-js-minify');

gulp.task('minifyJs', function(){
    gulp.src('./src/js/*.js')
        .pipe(minifyJs())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('browserSync', function () {
	browserSync({
		server: {
			baseDir: 'src'
		}
	});
});

gulp.task('watch', ['browserSync'], function () {
	gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);