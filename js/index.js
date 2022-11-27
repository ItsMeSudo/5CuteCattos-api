const express = require('express');
const app = express();
const port = 8080;
var bodyParser = require('body-parser');
var cors = require('cors');
let num;

app.use(bodyParser.json(), bodyParser.urlencoded({extended: false}));
app.use(cors({origin: ['*']}));
const macskak = ["https://i.imgur.com/BEjAPLj.jpeg", "https://i.imgur.com/pLXZxab.jpeg", "https://i.imgur.com/5XIjVFj.jpeg", "https://i.imgur.com/J0UJ635.jpeg", "https://i.imgur.com/2nYZYRj.jpeg"];

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Accept', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('GET', 'POST');
    num = getRandomInt(5)
    res.json({catto: macskak[num]}).end()
});

app.listen(port, () => {
    console.log(`A webszerver elindult a(z) ${port} porton`)
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};