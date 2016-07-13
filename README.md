# csv-columns
A CSV parser which groups the parsed output by column. Uses [`csv-parser`](https://github.com/mafintosh/csv-parser) module under the hood. The API is the same as `csv-parser`. Can handle CSVs both with headers (returns an object with headers as keys and corresponding column elements as values) or without (returns an array of groups of column elements).

## Usage

```javascript
var parse = require('path/to/csv-columns');

// Array output
var csvNoHeaders = '1,2,3,4,5\n6,7,8,9,10\n';
parse(csvNoHeaders, null, function (err, output) {
    // output is [[1,6], [2,7], [3,8], [4,9], [5,10]]
});

// Object output
var csvWithHeaders = 'one,two,tree,four,five\n1,2,3,4,5\n6,7,8,9,10\n';
parse(csvWithHeaders, {columns: true, auto_parse: true}, function (err, output) {
    // output is {one: [1,6], two: [2,7], tree: [3,8], four: [4,9], five: [5,10]}
});
```

## License

This project is released under the [MIT license](https://opensource.org/licenses/MIT).
