var fs = require('fs');

var file = fs.readFile(process.argv[2], function (err, data){
  if(!err){
    console.log(data.toString().split('\n').length -1);
  }
});
