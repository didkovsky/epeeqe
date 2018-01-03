var gulp = require('gulp'),
	less = require('gulp-less'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	browser = require('browser-sync'),
	del = require('del');


gulp.task('less', function() {
	return gulp.src('src/less/style.less')
		.pipe(less())
		.pipe(gulp.dest('src/css'));
});

gulp.task('css-min', ['less'], function() {
	return gulp.src('src/css/style.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('src/css'))
		.pipe(browser.reload({stream: true}));
});

gulp.task('js-compile', function() {
	return gulp.src(['src/bower_components/jquery/dist/jquery.min.js',
		'src/bower_components/bootstrap/dist/js/bootstrap.min.js',
		'src/bower_components/bootstrap-select/dist/js/bootstrap-select.js',
		'src/scripts/*.js',
		'src/scripts/**/*.js'])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/js'));
});

gulp.task('browser-reload', function() {
	browser({
        server: {
            baseDir: 'src'
        },
        notify: false
    });
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('watch', ['browser-reload', 'css-min', 'js-compile'], function() {
	gulp.watch('src/less/**/*.less', ['css-min']);
	gulp.watch('src/*.html', ['browser-reload']);
	gulp.watch('src/scripts/**/*.js', ['js-compile', 'browser-reload']);
});

gulp.task('build', ['clean', 'css-min', 'js-compile'], function() {
	var css = gulp.src(['src/css/style.min.css'])
		.pipe(gulp.dest('dist/css'));
	var fonts = gulp.src(['src/fonts/**/*'])
		.pipe(gulp.dest('dist/fonts'));
	var html = gulp.src(['src/**/*.html'])
		.pipe(gulp.dest('dist'));
	var js = gulp.src(['src/js/**/*.js'])
		.pipe(gulp.dest('dist/js'));
	var img = gulp.src(['src/img/**/*'])
		.pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['watch']);
