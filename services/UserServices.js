const { ObjectId } = require("mongodb");
const UserModel = require("../models/User");
const Wallet = require("../models/Wallet");
const { randomUUID } = require("crypto");

const ServicesCreateUser = async (data) =>{
    try {
        console.log("User Data",data)
        const AddUser = await UserModel.create(data);
         await Wallet.create({
            Amount:1000,
            WalletAddress:randomUUID(), 
            UserId:AddUser._id
        })
        return AddUser;
    } catch (error) {
        return error;
    }
}

const ServicesGetUser = async (data) =>{
    try {
        const GetUser = await UserModel.find({});
        return GetUser;
    } catch (error) {
        return error;
    }
}

const ServicesGetUserById = async (id) =>{
    try {
        const GetUserById = await  UserModel.findById(id);
        return GetUserById;
    } catch (error) {
        return error;
    }
}

const ServicesUpdateUser = async (id,data) =>{
    try {
        const UpdateUser = await UserModel.findByIdAndUpdate(
            { _id: ObjectId(id) },
            { $set: data },
            { new: false },
        );
        return UpdateUser;
    } catch (error) {
        return error;
    }
}

const ServicesDeleteUser  = async (id) =>{
    try {
        const DeleteUser = await UserModel.findByIdAndRemove(id);
        return  DeleteUser;
    } catch (error) {
        return error;
    }
}

module.exports = { ServicesCreateUser, ServicesGetUser,ServicesGetUserById, ServicesUpdateUser, ServicesDeleteUser }