const http = require('http');
const express = require('express');
const ejs = require('ejs');

const app = express();
const server = http.createServer(app);

const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static("assets"));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/search', (req,res) => {
    res.render('search');
});

app.get('/done', (req,res) => {
    res.render('done');
});

app.get('/thanks', (req,res) => {
    res.render('thanks');
});

server.listen(port, () => {
    console.log(`Server running at https://localhost:${port}/`);
});

//api : AIzaSyAINu-Vv9AJ4lAjjQUJsgKVWn7ZlOkn2HM