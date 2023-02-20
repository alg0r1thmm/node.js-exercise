const http = require('http');
 
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/html; charset=utf-8'});
    res.write('<h1>Easy Connect Server<h1>');
    res.end('<p>Node.js Study!</p>');
})

    .listen(8080, () => {
        console.log('connect to 8080 port . . . ');
    })

/*
3행의 .createServer() 함수는 서버를 만드는 함수
함수 안에 인자로 CallBack 함수를 넣고 해당 CallBack 함수에는 요청에 대한 응답,
즉 어떠한 이벤트를 받았을 때 실행해야 하는 작업을 작성
CallBack 함수의 파라미터에 두 가지 객체를 넣음
하나는 요청에 관한 정보를 담는 request
다른 하나는 응답에 관한 정보를 담는 response

res.writeHead() 는 응답에 대한 헤더를 기록하는 함수이고 파라미터로 요청 코드와 콘텐츠 타입 명시
( 여기서는 성공을 알리는 200 )
res.write() 는 파라미터로 클라이언트에 보낼 데이터를 넣어줌
res.end() 는 응답을 종료하는 메서드이며 여기에 넣은 파라미터까지 전달 후 응답 종료

끝으로 createServer() 함수 뒤에 .listen() 을 붙여 클라리언트와 연결할 포트번호 및 서버 연결시 실행할 CallBack 함수 삽입
*/