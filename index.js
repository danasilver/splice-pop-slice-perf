var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

Benchmark.prototype.setup = '\
var a = [],\n\
    sets = [],\n\
    i = 10000;\n\
while (i--) a.push(i);\n\
';

suite
.add('splice (small subset)', '\
  var n = 2;\n\
  while (a.length >= n) {\n\
    sets.push(a.splice(a.length - n, n));\n\
  }'
)
.add('slice (small subset)', '\
  var n = 2;\n\
  while (a.length >= n) {\n\
    sets.push(a.slice(a.length - n));\n\
    a.length -= n;\n\
  }'
)
.add('multiple pops (small subset)', '\
  var n = 2;\n\
  while (a.length >= n) {\n\
    var set = [];\n\
    for (var i = 0; i \x3C n; i++) {\n\
      set.push(a.pop());\n\
    }\n\
    sets.push(set);\n\
  }'
)
.add('splice (large subset)', '\
  var n = 1000;\n\
  while (a.length >= n) {\n\
    sets.push(a.splice(a.length - n, n));\n\
  }'
)
.add('slice (large subset)', '\
  var n = 1000;\n\
  while (a.length >= n) {\n\
    sets.push(a.slice(a.length - n));\n\
    a.length -= n;\n\
  }'
)
.add('multiple pops (large subset)', '\
  var n = 1000;\n\
  while (a.length >= n) {\n\
    var set = [];\n\
    for (var i = 0; i \x3C n; i++) {\n\
      set.push(a.pop());\n\
    }\n\
    sets.push(set);\n\
  }'
)
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();