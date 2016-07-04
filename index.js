'use strict';
var parse = require('csv-parse');

function flip(data) {
    if (data[0] && data[0].prop && data[0].prop.constructor === Array) 
        return flipArrays(data);
    else 
        return flipObjects(data);
}

function flipArrays(data) {
    return data.reduce(function (flipped, row) {
        row.forEach(function (val, index) {
            flipped[index] = flipped[index] || [];
            flipped[index].push(val)
        });
        return flipped;
    }, []);
}

function flipObjects(data) {
    return data.reduce(function (flipped, row) {
        for (var attr in row) {
            flipped[attr] = flipped[attr] || [];
            flipped[attr].push(row[attr]);
        }
        return flipped;
    }, {});
}

module.exports = function (input, options, callback) {
    parse(input, options, function (err, output) {
        if (err) return callback(err);
        callback(null, flip(output));
    });
};