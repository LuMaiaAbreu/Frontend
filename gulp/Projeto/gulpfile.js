const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')


function tarefasCss(cb){

    return gulp.src('./Vendor/**/*.css')
       .pipe (concat('libs.css'))
       .pipe(cssmin())
       .pipe(rename({suffix:'min'}))
       .pipe(gulp.dest('./dist'))
}

function tarefasJS(){
    return gulp.src('./Vendor/**/*.js')
       .pipe (concat('libs.js'))
       .pipe(uglify())
       .pipe(rename({suffix:'.min '}))
       .pipe(gulp.dest('./dist/js'))

}

exports.styles = tarefasCss
exports.scripts = tarefasJS