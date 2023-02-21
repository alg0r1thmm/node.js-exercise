const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    try {
        const f = await fs.readFile('./fs_test.html');
        res.writeHead(200, { 'Content-Type' : 'text.html; charset=UTR-8'});
        //200이 요청 성공
        res.end(f);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-type' : 'text.html; charset=UTF-8'});
        //500이면 서버에 오류 발생
        res.end(err.message);
    }
})
    .listen(8080, () => {
        console.log('Connect to 8080 port . . .');
    });