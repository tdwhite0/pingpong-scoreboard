'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sprity = require('sprity');
var gulpif = require('gulp-if');
var runSequence = require('run-sequence');

var webpack = require('gulp-webpack');
gulp.task('webpack', function () {
    return webpack(require('./webpack.config.js')).pipe(gulp.dest('public/'));
});

gulp.task('copyFonts', function () {
    gulp.src('./node_modules/font-awesome/css/*.css').pipe(gulp.dest('public/css'));
    return gulp.src('./node_modules/font-awesome/fonts/fontawesome-webfont.*').pipe(gulp.dest('public/fonts'));
});

gulp.task('spriteFlags', function () {
    return sprity.src({
        src: './images/flags/flags_iso/128/**/*.{png,jpg}',
        style: './sprite.css'
    })
  .pipe(gulpif('*.png', gulp.dest('./public/images/'), gulp.dest('./public/css/')))
});

gulp.task('sass', function () {
  gulp.src('./client/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    return runSequence('webpack --progress --colors --watch');

    //runSequence('webpack webpack --progress --colors --watch',
    //          ['build-scripts', 'build-styles'],
    //          'build-html',
    //          callback);

    //gulp.task('default', ['spriteFlags', 'sass', 'copyFonts', 'webpack'])
});

gulp.task('sass:watch', function () {
  return gulp.watch('./client/**/*.scss', ['sass','copyFonts']);
});

gulp.task('default',['spriteFlags','sass','copyFonts','webpack'])
