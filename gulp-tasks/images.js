const {dest, src} = require('gulp');
const imagemin = require('gulp-imagemin');

// Grabs all images, runs them through imagemin
// and plops them in the dist folder
const images = cb => {
  // We have specific configs for jpeg and png files to try
  // to really pull down asset sizes
  return src('./src/img/**/*')
    .pipe(
      imagemin(
        [
          imagemin.mozjpeg({quality: 60, progressive: true}),
          imagemin.optipng({optimizationLevel: 5, interlaced: null})
        ],
        {
          silent: true
        }
      )
    )
    .pipe(dest('./dist/img'))
    .on('done', cb);
};

module.exports = images;
