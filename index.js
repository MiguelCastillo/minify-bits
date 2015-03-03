var uglify = require('uglify-js');
var merge  = require('utils-merge');


/**
 * Method to minify source
 *
 * @param {{source: string}} data - Object with a `source` property to be minified
 */
function minify(data) {
  return _run(data);
}


/**
 * Method to configure minify for fine grained control of the minification process
 *
 * @param {object} options - Configuration settings for [uglify]{@link https://github.com/mishoo/UglifyJS2}
 *
 * @returns {function} delegate to be called with object with `source` property to be minified
 */
minify.config = function(options) {
  return function minify(data) {
    _run(data, options);
  };
};


/**
 * Method that executes the minification step
 */
function _run(data, options){
  options = options || {};
  if (options.sourceMap) {
    options.outSourceMap = data.name ? data.name + '.map' : 'out.js.map';
  }

  var result = uglify.minify(data.source, merge({fromString: true}, options));
  data.source = result.code;

  // If sourcemap information is generated, let's just copy it into the data
  if (result.map) {
    data.map = result.map;
  }
}


module.exports = minify;
