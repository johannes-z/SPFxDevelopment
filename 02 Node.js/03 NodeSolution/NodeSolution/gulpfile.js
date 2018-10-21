var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
// var slash = require("slash");
var spsave = require("gulp-spsave");

var paths = {
  scss: "./src/sass/**/*.scss",
  dist: "./Layouts/NodeSolution/dist",
  sources: "./Layouts/NodeSolution/dist/**.*.*",
  prod: "D:\\test"
};

gulp.task("compile:sass", function() {
  gulp
    .src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest(paths.dist));
});

//watch sass

gulp.task("watch:sass", function() {
  gulp.watch(paths.scss, ["compile:sass"]);
});

var spsaveCoreOption = {
  siteUrl: "http://sp2016",
  folder: "Shared%20Documents",
  checkin: true,
  checkinType: 1,
  flatten: false,
  notification: true
};

var spsaveCredential = {
  username: "spdom\\administrator",
  password: "Pa$$w0rd"
};

gulp.task("upload", function() {
  return gulp
    .src("./dist/**/*")
    .pipe(spsave(spsaveCoreOption, spsaveCredential));
});
