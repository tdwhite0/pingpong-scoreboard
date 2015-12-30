'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var typescript = require('gulp-tsc');

var webpack = require('gulp-webpack');
gulp.task('webpack', function () {
    return webpack(require('./webpack.config.js')).pipe(gulp.dest('public/'));
});

gulp.task('copyFonts', function () {
    gulp.src('./node_modules/font-awesome/css/*.css').pipe(gulp.dest('public/css'));
    return gulp.src('./node_modules/font-awesome/fonts/fontawesome-webfont.*').pipe(gulp.dest('public/fonts'));
});

gulp.task('sass', function () {
  gulp.src('./client/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./client/**/*.scss', ['sass','copyFonts']);
});

/* not needed because of webpac?? */
//gulp.task('tsc:compile', function () {
//    gulp.src(['src/**/*.ts'])
//    .pipe(typescript())
//    .pipe(gulp.dest('public/'))
//});

gulp.task('default',['sass','copyFonts','webpack'])
