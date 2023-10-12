const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = require('gulp-image')


function tarefasCss(cb){

    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './Vendor/Owl/owl.css',
        './Vendor/jquery-ui/jquery-ui.css',
        './src/css/style.css'
    ])
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

function tarefasImagem(){
    return gulp.src('./src/Imagens/*')
    .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true
    }))
    .pipe(gulp.dest('./dist/images'))
}

exports.styles = tarefasCss
exports.scripts = tarefasJS
exports.images = tarefasImagem