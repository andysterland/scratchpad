var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var connect = require("gulp-connect");
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task("webserver", function() {
    connect.server({
        root: "dist"
      });
});

gulp.task("build-html", function () {
    return  gulp.src("src/**/*.html")
            .pipe(gulp.dest("./dist"));
});

gulp.task("build-ts", function () {
    return  tsProject.src()
            .pipe(sourcemaps.init())
            .pipe(tsProject()).js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("./dist"));
});

gulp.task("build", function () {
    gulp.start("build-ts");
    gulp.start("build-html");
});

gulp.task("default", ["build", "webserver"]);