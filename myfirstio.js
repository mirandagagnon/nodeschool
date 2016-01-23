var fs = require('fs');

var filename = process.argv[2];

var file = fs.readFileSync(filename);

var str = file.toString();

console.log(str.split('\n').length - 1);
