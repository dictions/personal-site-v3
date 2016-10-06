var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
	return gulp.src('./public/**/*')
	.pipe(file('CNAME', 'ianwillia.ms'))
	.pipe(ghPages());
});