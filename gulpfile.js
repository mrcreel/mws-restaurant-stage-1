var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');

gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
  });

  gulp.task('watch', function(){
    gulp.watch('./app/css/*.css', ['css']);
  });

  gulp.task('default', ['watch', 'css']);