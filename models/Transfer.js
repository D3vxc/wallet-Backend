const mongoose = require('mongoose');

const TranferSchema = new mongoose.Schema(
    {
        ReceiverWalletId: {type: String},
        Amount: {type: Number}
    },{timestamps: true});

module.exports = mongoose.model('transfer',TranferSchema);