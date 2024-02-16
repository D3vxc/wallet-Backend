const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema(
    {
        WalletAddress: {type: String},
        Amount: {type: Number},
        UserId: {type: String}
    },{timestamps: true});

module.exports = mongoose.model('wallet',WalletSchema);