const express = require('express');

const routes = require('../router/index');
const http = require('http');

app = express();
const server = http.createServer(app)

const port = 5000;

app.use(express.json())
    .use(express.urlencoded({ extended: true }))
    .set('views', __dirname + '/views')
    .set('view engine', 'html')
    .use(express.static('public'))
    .listen(port, () => {
        console.log('it is listening to port 5252');
        console.log(`open http://localhost:${port}`);
    }
);
