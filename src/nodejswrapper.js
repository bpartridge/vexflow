/**
 * Vex Flow
 * Adapter for Node.js contributed by Brenton Partridge 2012
 *
 * Reads all source files into a Node.js-compatible module.
 * The module returns the Vex object, with Vex.document defaulted
 * to a new JSDOM document unless the environment provides
 * a global document object. If the user wishes to use their own
 * DOM tree, Vex.document should be reset before any renderers or
 * contexts are created.
 *
 * Note that for Browserify, which provides require() in the browser,
 * JSDOM is not needed, and require('jsdom') will not be called, 
 * so it is safe to manually ignore it.
 *
 * Also note that node-canvas, which does the heavy lifting for
 * browserless graphics, is only explicitly included within JSDOM,
 * not here, so it will be automatically ignored if JSDOM is.
 */
var fs = require('fs');
var vm = require('vm');

// We also should include raphael before loading Vex
// var Raphael = require('raphael');

// Read SConstruct to get the list of files
var scons = fs.readFileSync(__dirname + "/SConstruct", "utf8");
var sourceStr = scons.substring(scons.indexOf('['), scons.indexOf(']')+1);
var sources = vm.runInThisContext(sourceStr);

sources.push("../vextab/vextab.js");

// Execute them into this context
for (var i = 0; i < sources.length; i += 1) {
  var filename = __dirname + '/' + sources[i];
  var code = fs.readFileSync(filename, "utf8");
  code = code.replace('document', 'Vex.document');
  vm.runInThisContext(code);
}

// jsdom, if used, will automatically find our node-canvas module and use it
Vex.document = (typeof document === 'undefined') ?
  require('jsdom').jsdom() : document;

module.exports = Vex;
