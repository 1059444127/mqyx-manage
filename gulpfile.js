
var gulp = require('gulp'),
    less = require('gulp-less');
 
gulp.task('testLess', function () {
    gulp.src(['src/less/*.less','!src/less/extend/{reset,common}.less'])
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});
 
gulp.task('watchLess', function () {
    gulp.watch('src/**/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
});


