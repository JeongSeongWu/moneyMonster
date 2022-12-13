const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
})

const port = 3000;

app.listen(port, () => {
    console.log('서버 떳냐?')
})