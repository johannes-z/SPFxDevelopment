﻿var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var cache = require('gulp-cached'); 

var paths = {
    webroot: "./wwwroot/",
    scriptSource: "./wwwroot/demos/*.js",
    scriptDest: "./wwwroot/js/",
    demos: "./wwwroot/demos/",
    scss: "./wwwroot/sass/**/*.scss",
    scssDest: "./wwwroot/css/"
}

gulp.task('min:js', function () {
    return gulp.src([paths.scriptSource])
        .pipe(concat(paths.scriptDest + "min/site.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task('copy:js', function () {
    return gulp.src([paths.scriptSource])
        .pipe(gulp.dest(paths.scriptDest));
});

gulp.task("both:tasks", ["min:js", "copy:js"]);

gulp.task('copy:bootstap4', function () {
    try {
        gulp.src('node_modules/**')
            .pipe(cache('node_modules'))
            .pipe(gulp.dest('wwwroot/node_modules'));
    }
    catch (e) {
        return -1;
    }
    return 0;
});

gulp.task('compile:sass', function () {
    gulp.src(paths.scss)
        .pipe(sass())
        .pipe(gulp.dest(paths.scssDest));
});

gulp.task('watch:sass', function () {
    gulp.watch(paths.scss, ['compile:sass']);
});

gulp.task('babel:ToES5', () => {
    return gulp.src([paths.demos + "es6*.js"])
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('es5bundle.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.demos));
});

gulp.task('watch:babel', function () {
    gulp.watch(paths.scss, ['babel:es5']);
});


