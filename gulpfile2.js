// Version Gulp 4 para en caso de qu eno funcione gulp

var gulp = require('gulp');

var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

//compile scss into css

function style(){

//1.where is my scss file

return gulp.src('./css/*.scss')

//2. pass that file through sass compiler

.pipe(sass())

//3.where do I save the compiled CSS

.pipe(gulp.dest('./css'))

//4.stream changes to all browser

.pipe(browserSync.stream());

//5.stream changes to all browser

//6.stream changes to all browser

}

function watch() {

browserSync.init({

server: {

baseDir: './'

}

});

gulp.watch('./css/*.scss', style);

gulp.watch('./*.html').on('change', browserSync.reload);

gulp.watch('/js/*/.js').on('change', browserSync.reload);

}

exports.style = style;

exports.watch = watch;