// hey, everybody! it's a tiny Web server!
 
// instead of a bunch of foo = reqire("foo")
// list our required modules and loop through
var r = [ "fs", "http", "mime", "path", "url" ];
for (var i = 0; i < r.length; i++) {
global[r[i]] = require(r[i]);
}
 
// some constants
var k = {
"port": 8000,
"dir": "./"
};
 
// the main thing
var server = http.createServer( function(request, response) {
 
// extract the pathname from the request URL
var pathname = url.parse(request.url).pathname;
// add the home directory, /public or whatever
var filename = path.join(process.cwd(), k.dir, pathname);
// if the requested path has no file extension, assume it's a directory
// caution: if you are shipping an API, this is the wrong thing to do
if (!path.extname(filename)) {
filename = filename + '/index.html';
}
// does this path exist?
path.exists(filename, function(gotPath) {
// no, bail out
if (!gotPath) {
response.writeHead(404, {"Content-Type": "text/plain"});
response.write("404 Not Found");
response.end();
return;
}
 
// still here? filename is good
// look up the mime type by file extension
response.writeHead(200, {'Content-Type': mime.lookup(filename)});
// read and pass the file as a stream. Not really sure if this is better,
// but it feels less block-ish than reading the whole file
// and we get to do awesome things with listeners
fs.createReadStream(filename, {
'flags': 'r',
'encoding': 'binary',
'mode': 0666,
'bufferSize': 4 * 1024
}).addListener( "data", function(chunk) {
response.write(chunk, 'binary');
}).addListener( "close",function() {
response.end();
});
 
/*
// read an entire file into memory and then spit it out
fs.readFile(filename, function(err, data){
if (err) throw err;
response.write(data, 'utf8');
response.end();
});
*/
});
});
 
// fire it up
server.listen(k.port);