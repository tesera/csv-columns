# csv-columns
Traditional CSV parsers will usually return an array of record objects. Sometimes all you care about are columns. `csv- column` will return an array of column objects. Uses [`csv-parser`](https://github.com/mafintosh/csv-parser) module under the hood. API is same as `csv-parser`. Will convert both arrays (no headers) and objects (with headers) if headers are passed into options.

```javascript
var test = require('tape');
var parse = require('../');

test('arrays', function(t) {
    var data = '1,2,3,4,5\n6,7,8,9,10\n';
    parse(data, null, function (err, output) {
        t.looseEqual(output, [[1,6], [2,7], [3,8], [4,9], [5,10]])
    });
    t.end();
});

test('objects', function(t) {
    var data = 'one,two,tree,four,five\n1,2,3,4,5\n6,7,8,9,10\n';
    parse(data, {columns: true, auto_parse: true}, function (err, output) {
        t.looseEqual(output, {one: [1,6], two: [2,7], tree: [3,8], four: [4,9], five: [5,10]});
    });
    t.end();
});
```
