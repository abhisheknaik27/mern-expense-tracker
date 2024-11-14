const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/test', (req, res) => {
    res.json('test ok 3');
});


app.post('/api/transaction', (req, res) => {
    res.json(req.body);
})
app.listen(4000);