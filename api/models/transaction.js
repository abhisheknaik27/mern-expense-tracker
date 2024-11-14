const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    timeDate: String
});

const TransactionModel = mongoose.model('transaction', TransactionSchema);

module.exports = TransactionModel