const express = require('express');

const app = express();
app.set('port', process.env.POST || 8080);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index2.html');
});

app.listen(app.get('port'), () => {
    console.log('use ',app.get('port'), ' port . . .')
});

/*
<img src="./sample.png" />
html 파일 내에 public/ 이라는 경로를 명시 하지 않아도 자동으로 서버에서 static 폴더 탐색
*/