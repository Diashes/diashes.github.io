var gulp = require('gulp');                     // Gulp-task.
var concat = require('gulp-concat');            // Concatinates JavaScript.
var stripDebug = require('gulp-strip-debug');   // Removes `console` and debugging statements.
var uglify = require('gulp-uglify');            // Minify the JavaScript.
var changed = require('gulp-changed');          // Detects whether files in the stream changed.
var imagemin = require('gulp-imagemin');        // Compress images.
var minifyHTML = require('gulp-minify-html');   // Minify the HTML.
var autoprefix = require('gulp-autoprefixer');  // Adds any required vendor prefixes to CSS.
var minifyCSS = require('gulp-minify-css');     // Minify the CSS.
var sass = require('gulp-sass');                // Compiles Sass to CSS.


// CUSTOM //////////////////////////////////////////////////////////////////////

gulp.task('html', function () {
  return gulp.src('/app/**/*.html')
    .pipe(changed('/build'))
    .pipe(minifyHTML())
    .pipe(gulp.dest('/build'));
});


gulp.task('images', function() {
  return gulp.src('/app/images/**/*')
    .pipe(changed('/build/images/'))
    .pipe(imagemin())
    .pipe(gulp.dest('/build/images/'));
});


gulp.task('styles', function () {
  return gulp.src('./app/**.scss')
    .pipe(sass())
    .pipe(concat('generated.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./app/generated'));
});


gulp.task('scripts', function() {
  return gulp.src('/app/generated.js')
    .pipe(concat('generated.min.js'))
    .pipe(gulp.dest('/build'));
});


// VENDOR //////////////////////////////////////////////////////////////////////

gulp.task('vendor-styles', function () {
  return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css',
                   './node_modules/bootstrap/dist/css/bootstrap-theme.min.css'])
    .pipe(concat('vendor-styles.min.css'))
    .pipe(gulp.dest('./build/styles/'));
});


gulp.task('vendor-scripts', function() {
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
                   './node_modules/angular/angular.min.js',
                   './node_modules/angular-route/angular-route.min.js',
                   './node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(concat('vendor-scripts.min.js'))
    .pipe(gulp.dest('./build/scripts/'));
});


// TASKS ///////////////////////////////////////////////////////////////////////

gulp.task('default', [
  'html',
  'images',
  'styles',
  'scripts',
  'vendor-styles',
  'vendor-scripts'
]);

gulp.task('sass', [ 'styles' ], function() {
  gulp.watch('./app/**.scss', function() {
    gulp.run('styles');
  });
});


gulp.task('watch', [
  'html',
  'images',
  'styles',
  'scripts',
  'vendor-styles',
  'vendor-scripts'
  ],
  function() {
    gulp.watch('./app/**/*.html', function() {
      gulp.run('html');
    });
    gulp.watch('./app/scripts.js', function() {
      gulp.run('scripts');
    });
    gulp.watch('./app/**/*.scss', function() {
      gulp.run('styles');
    });
    gulp.watch('./app/images/**/*', function() {
      gulp.run('images');
    });
});
