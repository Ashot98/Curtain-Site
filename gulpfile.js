var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');

var sass = require('gulp-sass');
var gcmq = require('gulp-group-css-media-queries');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

var browserSync = require('browser-sync').create();
var middleware = require('connect-history-api-fallback')

var del = require('del');



// -------------------- JS Files Bundling and Compiling ----------------------
gulp.task("webpack", function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      
    }));
    callback();
  });
});


// -------------------- CSS Files Handling -----------------------------------
gulp.task('styles', function() {
  return gulp.src('./src/styles/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(rename({suffix: '.min', prefix: ''}))
    .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
    .pipe(cleanCSS())
    .pipe(gcmq())
    .pipe(gulp.dest('dist/css'));
});

// -------------------- Live Reload Browser Configuring ----------------------
gulp.task('browser-sync', ['styles', 'webpack'], function() {
  browserSync.init({
    server: {
      baseDir: "./dist",
      middleware: [middleware()]
    },
    notify: false
  });
});

// -------------------- Deleting old files -----------------------------------
gulp.task('del', function() {
  del(['dist/js/*.js', 'dist/index.html']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});

// -------------------- Watching for File Updates ----------------------------
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(['src/js/*.js', 'src/js/**/*.js'], ['webpack']);
  gulp.watch('./src/styles/*.sass', ['styles']);
  gulp.watch('dist/js/*.js').on("change", browserSync.reload);
  gulp.watch('dist/css/*.css').on("change", browserSync.reload);
  gulp.watch('dist/index.html').on("change", browserSync.reload);
});

// -------------------- Build Task -------------------------------------------
gulp.task('build', ['styles', 'del'], function(callback) {
  webpack(require('./webpack-dev.config.js'), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      
    }));
    callback();
  });
});