const WalletModel = require("../models/Wallet");

const ServicesGetWallet = async (uid) => {
  try {
    const GetWallet = await WalletModel.findOne({
      UserId:uid
    });
    return GetWallet;
  } catch (error) {
    return error;
  }
};

module.exports = {
  ServicesGetWallet
};
