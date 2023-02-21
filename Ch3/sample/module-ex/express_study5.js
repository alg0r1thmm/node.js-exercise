const expree = require('express');
const app = express();

app.use(function (err, req, res, next){
    console.log(err.stack);
    res.status(500).send('Somthing broke');
    //res.status 상태 코드의 400 500번 대를 너무 자세히 보여주면 해킹의 위협이 있음
});

app.listen(3000);

/*
1. express 불러오기
2. 포트 설정
3. 공통적으로 사용하는 미들웨어 장착
4. 라우터 구성
5. 404 처리 미들웨어를 구성
6. 오류 처리 미들웨어 구성
7. 생성된 서버가 포트를 리스닝
*/