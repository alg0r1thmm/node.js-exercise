const http = require('http');

http.createServer((req, res) => {})

    .listen(8080, () => console.log('connect to 8080 port..'))

/* 
localhost:8080 입력 시 사이트에 연결할 수 없음 이 표시됨

localhost는 루프백 호스트명으로 자신의 컴퓨터를 의미

실행 시 아무 코드도 없으면 connect to 8080 port.. 가 console.log 로 출력
*/