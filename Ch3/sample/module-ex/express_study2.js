const express = require('express');

const app = express();
app.set('port', process.env.PORT || 8080);
app.get('/', (req, res) => (
    res.sendFile(__dirname + '/index.html')
));

app.listen(app.get('port'), () => {
    console.log(app.get('port'))
})

/*
nodemon으로 서버 실행 시 변동 사항도 자동으로 반영
$ npx nodemon express_study2.js
html 파일을 보낼 때 fs 모듈에서의 .readFile() 대신 sendFile() 사용 가능
*/