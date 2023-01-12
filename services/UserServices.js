const UserModel = require("../models/User")

const SCreateUser = async (data) =>{
    try {
        console.log(data)
        const AddUser = await UserModel.create(data);
        return AddUser;
    } catch (error) {
        return error;
    }
}

const SGetUser = async (data) =>{
    try {
        const GetUser = await UserModel.find({});
        return GetUser;
    } catch (error) {
        return error;
    }
}

const SGetUserById = async (id) =>{
    try {
        const GetUserById = await  UserModel.findById(id);
        return GetUserById;
    } catch (error) {
        return error;
    }
}

const SUpdateUser = async (id,data) =>{
    try {
        const UpdateUser = await UserModel.findByIdAndUpdate(
            { _id: id },
            { $set: data },
            { new: false },
        );
        return UpdateUser;
    } catch (error) {
        return error;
    }
}

const SDeleteUser  = async (id) =>{
    try {
        const DeleteUser = await UserModel.findByIdAndRemove(id);
        return  DeleteUser;
    } catch (error) {
        return error;
    }
}

module.exports = { SCreateUser, SGetUser,SGetUserById, SUpdateUser, SDeleteUser }