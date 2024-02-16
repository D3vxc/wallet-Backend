const TransferModel = require("../models/Transfer");
const WalletModel = require("../models/Wallet");
const ServicesCreateTransfer = async (data, userId) => {
  // console.log(data.receiverwalletid, userId);
  console.log(data,"click here");
  
  console.log(data,"99999999");
  const ReceiversId = data.receiverwalletid;
  const SendersId = data.senderwalletid;
  const amount = Number(data.amount);

  try {
    const reciverWallet = await WalletModel.findOne({
      WalletAddress: ReceiversId,
    });

    // const sendersWallet = await WalletModel.findOne({
    //   UserId: SendersId,
    // });
    const sendersWallet = await WalletModel.findOne({
      WalletAddress: SendersId,
    });
    console.log("----->",sendersWallet);
    if (!reciverWallet) {
      throw new Error("no wallet found");
    }

    if (!sendersWallet) {
      throw new Error("incorect wallet");
    }

    if (sendersWallet.Amount < amount) {
      throw new Error("Wrong Amount");
    }
    const ReceiverWallet = await WalletModel.findByIdAndUpdate(
      reciverWallet._id,
      { Amount: reciverWallet.Amount + amount }
    );
    console.log("ReceiverWallet", ReceiverWallet);

    const SendersWallet = await WalletModel.findByIdAndUpdate(
      sendersWallet._id,
      { Amount: sendersWallet.Amount - amount }
    );
    console.log("SendersWallet", SendersWallet);

    const CreateTransfer = await TransferModel.create({
      ReceiverWalletId: reciverWallet.WalletAddress,
      SenderWalletId: sendersWallet.WalletAddress,
      Amount: amount,
    });

    return CreateTransfer;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const ServicesGetTransfer = async () => {
  try {
    const GetTransfer = await TransferModel.find();
    return GetTransfer;
  } catch (error) {
    return error;
  }
};

module.exports = {
  ServicesCreateTransfer,
  ServicesGetTransfer,
};
