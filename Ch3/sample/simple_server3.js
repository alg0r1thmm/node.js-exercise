const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf=8'});
    res.write('<h1>Create Node.js server');
    res.end('<p>http module study on Chapter 3</p>');
})
    .listen(8080);

/* Listening Event Listener */
server.on('listening', () => {
    console.log('Conneting to 8080 port . . .');
});

/* Error Event Listener */
server.on('error', () => {
    console.error(error);
})

/*
Listen() 메서드에 콜백 대신 listening 이벤트 리스너를 붙여 사용 가능하며,
오류를 핸들링 해주는 이벤트 리스너를 붙여서 작성 가능
오류 처리 시 주의할 점은 오류가 발생해도 꼭 응답 콜백 함수를 작성해주여 함
오류 발생 시 응답이 없는 경우에는 timeout 오류 발생
*/