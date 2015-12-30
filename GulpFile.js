'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var typescript = require('gulp-tsc');

gulp.task('sass', function () {
  gulp.src('./client/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


gulp.task('tsc:compile', function () {
    gulp.src(['src/**/*.ts'])
    .pipe(typescript())
    .pipe(gulp.dest('public/'))
});

gulp.task('default',['sass','tsc:compile'])
