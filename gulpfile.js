var sass = require('gulp-ruby-sass')
var rename = require('gulp-rename')
var gulp = require('gulp')
var autoprefixer = require('gulp-autoprefixer')
var uncss = require('gulp-uncss')
var csscomb = require('gulp-csscomb')
var cssmin = require('gulp-cssmin')
var connect = require('gulp-connect')

gulp.task('webserver', function() {
  connect.server()
})

gulp.task('sass', function() {
  var name = rename('bundle.css')
  var dist = gulp.dest('./dist')
  var opts = {}

  opts.loadPath = [
    './node_modules'
  ]

  return sass('sass/main.scss', opts)
    .pipe(name)
    .pipe(autoprefixer())
    .pipe(dist)
    .pipe(connect.reload())
})

gulp.task('watch', ['sass'], function() {
  gulp.watch('sass/**/*.scss', ['sass'])
})
