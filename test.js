var assert = require('assert');
var old = 0;
var foo;
var n = 0;
var lock = 0;
var x = 0;
old = Math.random();
do {
    x = Math.random();
    n = old;
    lock = 0;
    if ( x < 0.5) {
        n++;
        lock = 1;
    }
} while (old !== n);
assert.equal(lock, 0, "Lock === 1");
console.log("succeeded");
