// loads various gulp modules
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var concat = require('gulp-concat');


// concat all css deps
gulp.task('default', function () {
  return gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css'])
    .pipe(concatCss("all.css"))
    .pipe(gulp.dest('css'));
});

//minify css deps
gulp.task('minify-css', function () {
    gulp.src('css/all.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

gulp.task('scripts-min', function() {
  gulp.src(['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap/dist/js/bootstrap.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js/'))
});
 gulp.start('minify-css');
 gulp.start('scripts-min');
