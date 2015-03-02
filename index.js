'use strict';

var uglify = require('uglify-js');
var merge  = require('utils-merge');


/**
 * Method that executes the minification step
 */
function _minify(item, options){
  options = options || {};
  if (options.sourceMap) {
    options.outSourceMap = item.name ? item.name + '.map' : 'out.js.map';
  }

  var result = uglify.minify(item.source, merge({fromString: true}, options));
  item.source = result.code;

  // If sourcemap information is generated, let's just copy it in the item
  if (result.map) {
    item.map = result.map;
  }
}


/**
 * Method to minify source
 *
 * @param {{source: string}} item - Object with a `source` property to be minified
 */
function minify(item) {
  return _minify(item);
}


/**
 * Method to configure minify for fine grained control of the minification process
 *
 * @param {object} options - Configuration settings for [uglify]{@link https://github.com/mishoo/UglifyJS2}
 *
 * @returns {function} delegate to be called with object with `source` property to be minified
 */
minify.config = function(options) {
  return function minify(item) {
    _minify(item, options);
  };
};


module.exports = minify;
