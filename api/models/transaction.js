const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    timeDate: {type: Date, required: true}
});

const TransactionModel = mongoose.model('transaction', TransactionSchema);

module.exports = TransactionModel