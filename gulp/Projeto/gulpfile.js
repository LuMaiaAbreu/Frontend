const {parallel} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
/*const image = require('gulp-image')*/

function tarefasCss(callback){


    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css',
        './Vendor/Owl/OwlCarousel2-2.3.4/owl.css',
        './Vendor/jquery-ui/jquery-ui.css',
        './src/CSS/style.css',    
    ])
       .pipe (concat('libs.css'))
       .pipe(cssmin())
       .pipe(rename({suffix:'.min'}))
       .pipe(gulp.dest('./dist'))

       return callback()
}

function tarefasJS(callback){
     gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './Vendor/Owl/OwlCarousel2-2.3.4/owl.js',
        './Vendor/Jquery-mask/jquery.mask.js',
        './Vendor/jquery-ui/jquery-ui.js',
        './src/Js/custom.js',
      
    ])
       .pipe (concat('libs.js'))
       .pipe(uglify())
       .pipe(rename({suffix:'.min'}))
       .pipe(gulp.dest('./dist/js'))
    return callback()
}

/*function tarefasImagem(){
    
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
}*/

function tarefasHTML(callback){

    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

    return callback()  


}


exports.styles = tarefasCss
exports.scripts = tarefasJS
/*exports.image = tarefasImagem*/
exports.default = parallel( tarefasHTML, tarefasCss, tarefasJS )