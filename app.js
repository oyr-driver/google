const http = require('http');
const express = require('express');
const ejs = require('ejs');

const app = express();
const server = http.createServer(app);

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
})

server.listen(port, () => {
    console.log(`Server running at https://localhost:${port}/`);
});

//api : AIzaSyAINu-Vv9AJ4lAjjQUJsgKVWn7ZlOkn2HM