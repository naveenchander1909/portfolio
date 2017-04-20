var gulp = require('gulp'),
	watch = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer'),
	scss = require('gulp-scss');

gulp.task("scss", function () {
	gulp.src(
		"scss/*.scss"
	).pipe(scss(
		)).pipe(gulp.dest("css"));
});

gulp.task('autoprefixer', () =>
		  gulp.src('scss/*.scss')
		  .pipe(autoprefixer({
	browsers: ['last 2 versions'],
	cascade: false
}))
		  .pipe(gulp.dest('css'))
		 );

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['scss', 'autoprefixer'])
});

