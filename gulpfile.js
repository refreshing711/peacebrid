var gulp=require("gulp");
var sass=require("gulp-sass");
var cssmin=require('gulp-cssmin');
var uglify=require("gulp-uglify");
var imagemin=require("gulp-imagemin");
var concat =require("gulp-concat");
var rename=require("gulp-rename");
var minifyhtml=require("gulp-minify-html");

//gulp.task("html",function(){
//	gulp.src("src/app/*.html")
//	.pipe(minifyhtml())
//	.pipe(rename({'suffix':".min"}))
//	.pipe(gulp.dest("./dist/app"))
//})
gulp.task("scss" ,function(){
	gulp.src("src/scss/*.scss")
	.pipe(rename({"suffix":".min"}))
	.pipe(sass())
	.pipe(cssmin())
	.pipe(gulp.dest('css'))
})


//gulp.task("js",function(){
//	gulp.src("src/js/*.js")
//	.pipe(uglify())
//	.pipe(rename({"suffix":".min"}))
//	.pipe(concat("main.min.js"))
//	.pipe(gulp.dest("js"))
//})

gulp.task("watch",function(){
	gulp.watch(["src/scss/*.scss"],["scss"])		
})

