var fs = require('fs');
var burrito = require('burrito');

fs.readFile('test.js', 'utf-8', function(err, data) {
    if (err) {
        console.error('Failed to open file, err %s', err);
        process.exit(1);
    }
    //console.log(data);
    burrito(data, function(node) {
        console.log(node.value);
        if (node.name === 'var') {
            // for var node.node[1][0] is the name (with node[0] being the descriptive object, 
            // while node.node[1][1] is the assignment to the name.
            //console.log(node.node[1][0]);
            //console.log(node.node[1][1]);
            console.log('');
            console.log('');
            //console.log(node);
            var assigned = node.state.node[1][0][1];
            if (assigned) {
                console.log(node.state.node[1][0][0] + ' ' + assigned[0].name);
            }
            else {
                console.log(node.state.node[1][0][0] + ' unassigned');
            }
        }
    });
});
