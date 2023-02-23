const morgan = require('morgan');
const axios = require('axios');
const express = require('express');
const app = express();

/* setting port */
app.set('port', process.env.PORT || 8080);

/* personal middleware */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* setting route */
app.get('/', async (req, res) => {
    const serviceKey = "";
    const airUrl = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?";

    let parmas = encodeURI('serviceKey') + '=' + serviceKey;
    parmas += '&' + encodeURI('numOfRows') + '=' + encodeURI('1');
    parmas += '&' + encodeURI('pageNo') + '=' + encodeURI('1');
    parmas += '&' + encodeURI('dataTerm') + '=' + encodeURI('DAILY');
    parmas += '&' + encodeURI('ver') + '=' + encodeURI('1.3');
    parmas += '&' + encodeURI('stationName') + '=' + encodeURI('강남구');
    parmas += '&' + encodeURI('returnType') + '=' + encodeURI('json')

    const url = airUrl + parmas;

    try {
        const result = await axios.get(url);
        const airItem = {
            /* 저자 github 통해서 오류 발견 */
            //"location": result.data.ArpltnInforInqireSvcVo['stationName'], // stationName 을 응답 메시지로 보내주지 않습니다.
            location: '강남구', //locaition을 직접 명시
            time: result.data.response.body.items[0]['dataTime'], // 시간대
            pm10: result.data.response.body.items[0]['pm10Value'], // pm10 수치
            pm25: result.data.response.body.items[0]['pm25Value'], // pm25 수치
        }
        const badAir = [];
        if (airItem.pm10 <= 30) {
            badAir.push("좋음");
        } else if (airItem.pm10 > 30 && airItem.pm10 <= 80) {
            badAir.push("보통");
        } else {
            badAir.push("나쁨");
        }

        if (airItem.pm25 <= 15) {
            badAir.push("좋음");
        } else if (airItem.pm25 > 15 && airItem.pm10 <= 35) {
            badAir.push("보통");
        } else {
            badAir.push("나쁨");
        }

        res.send(`관측 지역: ${airItem.location} / 관측 시간: ${airItem.time} <br>
                    미세먼지 ${badAir[0]} 초미세먼지 ${badAir[1]} 입니다.`);
    } catch (error) {
        console.log(error);
    }
});

/* Connect to Server */
app.listen(app.get('port'), () => {
    console.log('Connect to ',app.get('port'), ' Port . . . ')
});