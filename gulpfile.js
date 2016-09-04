var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

var browserSync = require('browser-sync').create();
gulp.task('default',function(){
    console.log('hello gulp');
});

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
var cssnano = require('gulp-cssnano');
// 压缩css
gulp.task('minifycss', function() {
    return gulp.src('app/css/*.css')      //压缩的文件
        .pipe(cssnano())                 //执行压缩
        .pipe(gulp.dest('dist/css/'));   //输出文件夹   
});

// 压缩js
gulp.task('minifyjs', function() {
    return gulp.src('app/js/*.js')
         //.pipe(concat('main.js'))    //合并所有js到main.js
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('dist/js/'));    //输出main.js到文件夹
         //.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        //.pipe(gulp.dest('minified/js'));  //输出
});

// 注册一个任务
gulp.task('copy', function() {
  gulp.src('app/*.html')
    .pipe(gulp.dest('dist/')); // 将此处需要的操作传递进去
});
//监控
gulp.task('dist', function() {
  // src/index.html
  gulp.watch('app/*.html', ['copy']);
  gulp.watch('app/css/*.css', ['minifycss']);
  gulp.watch('app/js/*.js', ['minifyjs']);
});

