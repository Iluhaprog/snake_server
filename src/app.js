require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const scores = [
    {
        title: 'Ilya',
        score: 100,
    },
];

app.use(cors({
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
}));

app.get('/scores', (req, res) => {
    const result = scores.map((item) => `
        <p><span>${item.title}</span><span>${item.score}</span></p>
    `);
    res.send(result);
});

app.post('/setScore', (req, res) => {
    const {nik: title, score} = req.query;
    scores.unshift({title, score});
    res.send('ok');
});
  
app.listen(port, () => {
    console.log(process.env.ORIGIN);
    console.log(`Example app listening at http://localhost:${port}`);
})