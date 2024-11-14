const express = require('express');
const cors = require('cors');
require('dotenv').config();
const TransactionModel = require('./models/transaction');

const { default: mongoose } = require('mongoose');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/test', (req, res) => {
    res.json('test ok 3');
});


app.post('/api/transaction', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const {name, price, description, timeDate} = req.body;
    const transaction = await TransactionModel.create({
        name,
        price,
        description,
        timeDate
    });
    res.json(transaction);
})
app.listen(4000);