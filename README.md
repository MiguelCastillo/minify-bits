# minify-bits
Minify transform for [bit runner](https://github.com/MiguelCastillo/bit-runner)


### Examples

#### minify method
``` javascript
var minify = require('minify-bits');

minify({source: 'function() {}'});
```

#### minify.confg method
``` javascript
var minify = require('minify-bits');

minify.config({outSourceMap: "out.js.map"})({source: 'function() {}'});
```

#### [bit runner](https://github.com/MiguelCastillo/bit-runner)

##### Minify without configuration settings
``` javascript
var bitRunner = require('bit-runner');
var minify    = require('minify-bits');

/**
 * JavaScript pipeline
 */
bitRunner.register('default', function buildPipeline(task) {
  task
    .load('index.js')
    .then(minify)
});
```

##### Minify with configuration settings.
All settings are passed directly to [uglify](https://github.com/mishoo/UglifyJS2#api-reference). Please refer to their site for details on the different options.

The *only* option that specific to the minify-bits is `sourceMap`, which is a boolean to enable/disable generating source maps. I expect this list will grow.

``` javascript
var bitRunner = require('bit-runner');
var minify    = require('minify-bits');

/**
 * JavaScript pipeline
 */
bitRunner.register('default', function buildPipeline(task) {
  task
    .load('index.js')
    .then(minify.config({sourceMap: true}))
});
```
