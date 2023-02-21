const express = require('express');

const app = express();
app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index2.html');
});

app.get('/test', (req,res) => {
    res.sendFile(__dirname + '/index3.html');
})

app.listen(app.get('port'), () => {
    console.log('using' ,app.get('port'), ' port . . .')
}); 