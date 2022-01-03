// Plugins
// const Image = require('@11ty/eleventy-img');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const fs = require('fs');

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

// Utils
const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');

// Flags
const isProduction = process.env.NODE_ENV === 'production';

// async function imageShortcode(src, alt, sizes) {
//   let metadata = await Image(src, {
//     widths: [300, 600],
//     formats: ['avif', 'jpeg']
//   });

//   let imageAttributes = {
//     alt,
//     sizes,
//     loading: 'lazy',
//     decoding: 'async'
//   };

//   // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
//   return Image.generateHTML(metadata, imageAttributes);
// }

module.exports = config => {
  config.addPassthroughCopy('./src/fonts');
  config.addPassthroughCopy('./src/js');

  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  // Add plugins
  config.addPlugin(rssPlugin);

  // Add transforms
  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  // Returns a collection of blog posts in reverse date order
  config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // 404
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
