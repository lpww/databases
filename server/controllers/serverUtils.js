var httpRequest = require ('http-request');
exports.collect = function(req, callback){
  console.log("collect called");
  var data = '';
  req.setEncoding('utf8');
  req.on('data', function (chunk){
    console.log("collect ON data !!!");
    data += chunk;
  });
  req.on('end', function (err, data){
    if (err) {
      throw err;
    }
    console.log("COLLECT before Data");
    console.log(data);
    callback(JSON.parse(data));
  });

};

exports.defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};
