const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Set-cookie' : "name=Jeong"});
    console.log(req.headers.cookie);
    res.end('Cookie --> Header');
})
    .listen(8080, () => {
        console.log('Connet to 8080 port . . .')
    });