
var qunit = require('qunit');

qunit.setup({
  log: {
    assertions: false,
    tests: true,
    summary: true,
    globalSummary: true
  }
})

qunit.run({
  code: {path: __dirname + "/../src/nodejswrapper.js", namespace:"Vex"},
  tests: [__dirname + '/nodejstests.js']
});
