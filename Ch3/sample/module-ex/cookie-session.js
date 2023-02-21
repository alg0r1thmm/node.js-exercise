const http = require('http');

const session = {};
const sessKey = new Date();
session[sessKey] = { name : 'Jeong'};

http.createServer((req, res) => {
    res.writeHead(200, { 'Set-cookie' : 'session=$(sessKey)'});
    res.end('Session-Cookie --> Header');
})
    .listen(8080, () => {
        console.log('Connect to 8080 port . . .');
    });