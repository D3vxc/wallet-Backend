const WalletModel = require("../models/Wallet");

const SCreateWallet = async (data,id) =>{
    try {
        const CreateWallet = await WalletModel.create(data,id);
        return CreateWallet;
    } catch (error) {
        return error;
    }
}

const SGetWallet = async () =>{
    try {
        const GetWallet = await WalletModel.find();
        return GetWallet;
    } catch (error) {
        return error;
    }
}

const SGetWalletById = async (id) =>{
    try {
        const GetByIdWallet = await WalletModel.findById(id);
        return GetByIdWallet;
    } catch (error) {
        return error;
    }
}

const SUpdateWallet = async (id,data) =>{
    try {
        const UpdateWallet = await WalletModel.findByIdAndUpdate(
            { _id: id },
            { $set: data },
            { new: false }
        );
        return UpdateWallet;
    } catch (error) {
        return error;
    }
}

const SDeleteWallet = async (id) =>{
    try {
        const DeleteWallet = await WalletModel.findByIdAndUpdate(id);
        return DeleteWallet;
    } catch (error) {
        return error;
    }
}

module.exports = { SCreateWallet, SGetWallet, SGetWalletById, SUpdateWallet, SDeleteWallet }