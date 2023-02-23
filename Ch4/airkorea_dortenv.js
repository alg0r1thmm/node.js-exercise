const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
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
app.get('/airkorea', async (req, res) => {
    const serviceKey = "";
    const airUrl = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?";

    let parmas = encodeURI('serviceKey') + '=' + serviceKey;
    parmas += '&' + encodeURI('numOfRows') + '=' + encodeURI('1');
    parmas += '&' + encodeURI('pageNo') + '=' + encodeURI('1');
    parmas += '&' + encodeURI('dataTerm') + '=' + encodeURI('DAILY');
    parmas += '&' + encodeURI('ver') + '=' + encodeURI('1.3');
    parmas += '&' + encodeURI('stationName') + '=' + encodeURI('마포구');
    parmas += '&' + encodeURI('returnType') + '=' + encodeURI('json')

    const url = airUrl + parmas;

    try {
        const result = await axios.get(url);
        res.json(result.data);
    } catch (error) {
        console.log(error);
    }
});

/* Connect to Server */
app.listen(app.get('port'), () => {
    console.log('Connect to ',app.get('port'), ' Port . . . ')
});