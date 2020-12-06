var _ = require('lodash');
var m = require('./module.js')

console.log(_.join(['Hello', 'Node.js'], ' '));
console.log(m.name);
console.log(m.version.toFixed(1));
m.f();