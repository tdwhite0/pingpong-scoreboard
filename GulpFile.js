'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
//var ts = require('gulp-typescript');

//gulp.task('default', function () {
//    return gulp.src(['app.ts', '!client/**/*.ts', '!server/**/*.ts' ])
//        .pipe(ts({
//        noImplicitAny: true,
//        out: 'output.js'
//    }))
//        .pipe(gulp.dest('built/local'));
//});


gulp.task('sass', function () {
  gulp.src('./client/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});