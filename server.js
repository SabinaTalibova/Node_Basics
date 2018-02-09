var http=require('http');
var app_rote=require('./app_route');




http.createServer(app_rote.handleRequest()).listen(4340);