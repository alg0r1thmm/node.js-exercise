const morgan = require('morgan');
const request = require('request');
const express = require('express');
const app = express();

/* setting port */
app.set('port', process.env.PORT || 8080);

/* personal middleware */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

/* setting route */
app.get('/', (req, res) => {
    const client_id = '';
    const client_secret = '';
    const api_url = 'https://openapi.naver.com/v1/search/news?query='
                    + encodeURI('코스피');
    const option = {
    };
    const options = {
        url : api_url,
        qs : option,
        headers : { 'X-Naver-Client-Id' : client_id,
                    'X-Naver-Client-Secret' : client_secret },
    };

    request.get(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let newsItem = JSON.parse(body).items;
            //items - title, link, description, pubDate

            const newsJson = {
                title : [],
                link : [],
                description : [],
                pubDate : []
            }

            for (let i = 0; i< newsItem.length; i++) {
                newsJson.title.push(newsItem[i].title.replace
                                    (/(<([^>]+)>)|&quot;/ig, ""));
                newsJson.link.push(newsItem[i].link);
                newsJson.description.push(newsItem[i].description.replace
                                            (/(<([^>]+)>)|&quot;/ig, ""));
                newsJson.pubDate.push(newsItem[i].pubDate);
            }
            res.json(newsJson);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});

/* Connect to Server and Port */
app.listen(app.get('port'), () => {
    console.log('Connect to ',app.get('port'), ' Port . . . ');
})