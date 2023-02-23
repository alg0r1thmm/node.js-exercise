const morgan = require('morgan');

/* express app generate */
const express = require('express');
const app = express();

/* setting port */
app.set('port', process.env.PORT || 8080);

/* personal miidleware */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

/* post data with test */
let boardList = [];
let numOfBoard = 0;

/* Setting Route */
app.get('/', (req, res) => {
    res.send('this is api.js');
});

/* post API */
app.get('/board', (req, res) => {
    res.send(boardList);
});

app.post('/board', (req, res) => {
    const board = {
        "id": ++numOfBoard,
        "user_id": req.body.user_id,
        "date": new Date(),
        "title": req.body.title,
        "content": req.body.content
    };
    boardList.push(board);

    res.redirect('/board');
});

app.put('/board/:id', (req, res) => {
    const findItem = boardList.find((item) => {
        return item.id == +req.params.id
    });

    const idx = boardList.indexOf(findItem);
    boardList.splice(idx, 1);

    const board = {
        "id": +req.params.id,
        "user_id": req.body.user_id,
        "date": new Date(),
        "title": req.body.title,
        "content": req.body.content
    };
    boardList.push(board);

    res.redirect('/board');
});

app.delete('/board/:id', (req, res) => {
    const findItem = boardList.find((item) => {
        return item.id == +req.params.id
    });
    const idx = boardList.indexOf(findItem);
    boardList.splice(idx, 1);

    res.redirect('/board');
});

/* Connect to Server */
app.listen(app.get('port'), () => {
    console.log('Connect to ',app.get('port'), ' Port . . . ')
});