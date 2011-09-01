var fs = require('fs');
var burrito = require('burrito');

fs.readFile('test.js', 'utf-8', function(err, data) {
    if (err) {
        console.error('Failed to open file, err %s', err);
        process.exit(1);
    }
    console.log(data);
    burrito(data, function(node) {
        console.log(node);
    });
});
