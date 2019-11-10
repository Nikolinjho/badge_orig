const gulp = require('gulp');

//include plugins
const compressCss = require('gulp-minify-css');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', function() {
    return gulp.src('./src/css/*.scss')
               .pipe(sourcemaps.init())
               .pipe(sass().on('error', sass.logError))
               .pipe(sourcemaps.write('./'))
            //    .pipe(compressCss({
            //        keepSpecialComments: 1
            //    }))
               .pipe(gulp.dest('./dist/css'))
});

gulp.task('watch', function(){
    gulp.watch('./src/css/*.scss', gulp.series('sass-compile'));
});


function toMinifyCss(){
    gulp.task('minify-css', function(){
        return gulp.src('./src/css/style.css')
        .pipe(minifyCSS({keepSpecialComments: 1}))
        .pipe(gulp.dest('./dist/css'))
    })
}


