const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

/* setting port */
app.set('port', process.env.PORT || 8080);

/* persnal middleware */
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(cookieParser('secret@1234')); //암호화된 쿠키를 사용하기 위한 임의의 문자 전송
app.use(session({
    secret : 'secret@1234', //excrypt
    resave : false, //새로운 요청 시 세션에 변동 사항 없어도 다시 저장할시 설정
    saveUninitialized : true, //세션에 저장할 내용이 없어도 저장할지 설정
    cookie : {
        httpOInly : true, //로그인 구현 시 필수 적용, JavaScript로 접근 할 수 없게 하는 기능
    },
    // name : 'connect.sid' //세션 쿠키의 Name 저장 default가 connect.sid
}));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

/* setting route */
app.get('/', (req, res) => {
    if (req.session.name) {
        const output = `<h2>Login complete!</h2><br>
            <p>${req.session.name}! Hello</p></br>`
        res.send(output);
    } else {
        const output = `<h2>Login fail!</h2><br>
            <p>Try again</p></br>`
        res.send(output);
    }
});

app.get('/login', (req, res) => { //실제 구현시 POST
    console.log(req.session);
    //쿠키 사용 시 쿠키에 값 설정
    //res.cookie(name, value, options)
    //세션 쿠키 사용 시
    req.session.name = 'Jeong';
    res.end('Login OK')
});

app.get('/logout', (req, res) => {
    res.clearCookie('connect.sid'); //세션 쿠키 삭제
    res.end('Logout Ok');
});

/* connect server and port */
app.listen(app.get('port'), () => {
    console.log('Server port is ',app.get('port'), ' . . .')
})