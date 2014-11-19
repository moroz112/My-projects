/**
 * Created by amoroz-prom on 16.11.14.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
gulp.task('cssconcat',function(){
    gulp.src('./css/**/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist'));
});