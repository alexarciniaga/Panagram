// Include gulp
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('css', function(){
	return gulp.src('./assets/scss/style.scss')
	.pipe(sass({
		outputStyle: 'compressed'
	}).on('error', sass.logError))
	.pipe(gulp.dest('./'));
});

gulp.task('default', function(){
    gulp.watch('./assets/scss/*.scss', gulp.series('css'));
  return
});