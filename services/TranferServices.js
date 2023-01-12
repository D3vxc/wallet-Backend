const TransferModel = require("../models/Transfer");

// const SCreateTransfer = async (data) =>{
//     try {
//         const CreateTransfer = await TransferModel.create(data);
//         return CreateTransfer;
//     } catch (error) {
//         return error;
//     }
// }

const SGetTransfer = async () => {
  try {
    const Gettransfer = await TransferModel.find();
    return Gettransfer;
  } catch (error) {
    return error;
  }
};

const SGetTransferById = async (id) => {
  try {
    const GetByIdTransfer = await TransferModel.findById(id);
    return GetByIdTransfer;
  } catch (error) {
    return error;
  }
};

const SUpdateTransfer = async (id, data) => {
  try {
    const UpdateTransfer = await TransferModel.findByIdAndUpdate(
      { _id: id },
      { $set: data },
      { new: false }
    );
    return UpdateTransfer;
  } catch (error) {
    return error;
  }
};

const SDeleteTransfer = async (id) => {
  try {
    const DeleteTransfer = await TransferModel.findByIdAndUpdate(id);
    return DeleteTransfer;
  } catch (error) {
    return error;
  }
};

// const TransferMoney = async (sender, receiver, amount) => {
//   try {
//     const Data = await TransferModel.create({
//       sender,
//       receiver,
//       amount,
//     });
//     if(sender >= amount){

//     }
//     const Sender = await TransferModel.finbyidAndUpdate(sender, amount);
//     const Receiver = await TransferModel.finbyidAndUpdate(receiver, amount);

//     return Data ,Sender, Receiver;
//   } catch (error) {
//     return error;
//   }
// };

const SCreateTransfer = async (data) => {
  console.log(data.receiversId);
  const ReceiversId = data.receiversId;
  const SendersId = data.sendersId;
  const amount = data.amount;

  try {
    const CreateTransfer = await TransferModel.create(
      ReceiversId,
      SendersId,
      amount
    );
    const ReceiverWallet = await WalletModel.findByIdAndUpdate({
      _id: ReceiversId.toString(),
      $set: { amount: +amount },
    });
    console.log("ReceiverWallet", ReceiverWallet);
    const SendersWallet = await WalletModel.findByIdAndUpdate({
      id: SendersId,
      $set: { amount: -amount },
    });
    return CreateTransfer, ReceiverWallet, SendersWallet;
  } catch (error) {
    return error;
  }
};

module.exports = {
  SCreateTransfer,
  SGetTransfer,
  SGetTransferById,
  SUpdateTransfer,
  SDeleteTransfer,
};
