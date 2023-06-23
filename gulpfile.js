const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const browsersync = require('browser-sync').create();

const cssFiles = [
    'app/scss/main.scss',
    'app/venders/swiper/css/swiper.css',
];

// sass task for styles css
function scssTask(){
    return src(cssFiles, {sourcemaps:true})
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('dist', {sourcemaps:'.'}));
}

// sass task for minified style css
function scssTaskMinified(){
    return src(cssFiles, {sourcemaps:true})
    .pipe(sass())
    .pipe(concat('bundle.scss'))
    .pipe(postcss([autoprefixer, cssnano()]))
    .pipe(rename('bundle.min.css'))
    .pipe(dest('dist', {sourcemaps:'.'}))
}

// Array of javscript files
const jsFilesArray = [
    "app/venders/jquery/jquery-3.7.0.min.js",
    "app/venders/swiper/js/swiper-bundle.min.js",
    "app/js/main.js",
]


// javascript task
function jsTask(){
    return src(jsFilesArray, {sourcemaps:true})
    .pipe(concat('bundle.js'))
    .pipe(terser())
    .pipe(rename('bundle.min.js'))
    .pipe(dest('dist', {sourcemaps: '.'}))
}

//browserSync launch server
function browsersyncServe(cb){
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

// browser sync reload the server when make changes in code
function browsersyncReload(cb){
    browsersync.reload();
    cb();
}

// watchtask
function watchTask(){
    watch('*.html', browsersyncReload);
    watch(['app/scss/**/*.scss', 'app/js/main.js'], series(scssTask, scssTaskMinified, jsTask, browsersyncReload));
}

exports.default = series(
    scssTask,
    scssTaskMinified,
    jsTask,
    browsersyncServe,
    watchTask
);