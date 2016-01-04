'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sprity = require('sprity');
var gulpif = require('gulp-if');
//var ts = require('gulp-typescript');

//gulp.task('default', function () {
//    return gulp.src(['app.ts', '!client/**/*.ts', '!server/**/*.ts' ])
//        .pipe(ts({
//        noImplicitAny: true,
//        out: 'output.js'
//    }))
//        .pipe(gulp.dest('built/local'));
//});

var webpack = require('gulp-webpack');
gulp.task('webpack', function () {
    return webpack(require('./webpack.config.js')).pipe(gulp.dest('public/'));
});

gulp.task('copyFonts', function () {
    gulp.src('./node_modules/font-awesome/css/*.css').pipe(gulp.dest('public/css'));
    return gulp.src('./node_modules/font-awesome/fonts/fontawesome-webfont.*').pipe(gulp.dest('public/fonts'));
});

gulp.task('sprites', function () {
    return sprity.src({
        src: './images/flags/flags/64/**/*.{png,jpg}',
        style: './sprite.css',
        // ... other optional options 
        // for example if you want to generate scss instead of css 
        processor: 'sass', // make sure you have installed sprity-sass 
    })
  .pipe(gulpif('*.png', gulp.dest('./public/images/'), gulp.dest('./public/css/')))
});

gulp.task('copyFlags', function () {
    // create sprites
    
    // copy sprite'd images
    return gulp.src('./images/flags/**').pipe(gulp.dest('public/images/flags'));
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

gulp.task('default',['sass','copyFonts','sprites','webpack'])
