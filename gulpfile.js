let gulp = require('gulp'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify');
    concat = require('gulp-concat');
    rename = require('gulp-rename');
    css = require('gulp-clean-css');



gulp.task('scripts', () => {
    return gulp.src('public/javascripts/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('public/dist/script'))
        .pipe(rename('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/script'));
});

gulp.task('css', () => {
    return gulp.src('public/stylesheets/*.css')
        .pipe(concat('stlye.css'))
        .pipe(gulp.dest('public/dist/css'))
        .pipe(rename('style.min.css'))
        .pipe(css())
        .pipe(gulp.dest('public/dist/css'));
});

gulp.task('default', ['scripts', 'css']);
gulp.task('browser', () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.watch('public/javascripts/*.js').on('change', () => {
    return gulp.src('public/javascripts/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('public/dist/script'))
        .pipe(rename('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/script'));
});



gulp.watch('public/stylesheets/**/*.css').on('change', () => {
    return gulp.src('public/stylesheets/**/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/dist/css'))
        .pipe(rename('main.min.css'))
        .pipe(css())
        .pipe(gulp.dest('public/dist/css'));
});





gulp.watch(['index.html', './public/stylesheets/main.css', './public/javascripts/main.js']).on('change', () => {
    browserSync.reload();
});
