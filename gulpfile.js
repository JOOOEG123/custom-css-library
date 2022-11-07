const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function scssTask() {
    // return src('scss/style.scss', { sourcemaps: true })
    //     .pipe(sass())
    //     .pipe(dest('css', { sourcemaps: '.' }))
    // }
    return src('index.scss', { sourcemaps: false })
        .pipe(sass())
        .pipe(dest('css', { sourcemaps: '.' }))
    }

function watchTask() {
    // watch(['scss/**/*.scss'], scssTask);
    watch(['index.scss'], scssTask);
}

exports.default = series(
    scssTask,
    watchTask
);