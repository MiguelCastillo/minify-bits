# minify-bits
Minification plugin for [bit runner](https://github.com/MiguelCastillo/bit-runner), which uses [uglify](https://github.com/mishoo/UglifyJS2#api-reference) to do the minification.


### Configuration `bitrunnerfile.js`

#### Minify without configuration settings
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

#### Minify with configuration settings.
All settings are passed directly to [uglify](https://github.com/mishoo/UglifyJS2#api-reference). Please refer to their site for details on the different options.

The *only* option that is specific to minify-bits is `sourceMap`, which is a boolean to enable/disable generating source maps. I expect this list will grow.

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
