var http = require('http');
var server = http.createServer(function(req,res){

	res.end("selamat datang di Aplikasi Pertamaku..");

}).listen(8000);

console.log("Server is running on port 8000");