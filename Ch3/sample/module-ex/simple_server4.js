const http = require('http')

http.createServer((req, res) => {
    // console.log(req);
    // console.log(res);
    if (req.url === '/');
        res.write('Hello');
        res.end()
})
    .listen(8080, () => {
        console.log('Connect to 8080 port . . .')
    })