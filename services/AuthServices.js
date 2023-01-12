// const AuthModel = require('../models/Auth');

// const SCreateAuth = async (data)=>{
//     try {
//        const AddUser = await AuthModel.create(data)
//        return AddUser;
//     } catch (error) {
//         return error;
//     }
// }

// const SGetAuth = async () => {
//     try {
//         const GetUser = await AuthModel.find();
//         return GetUser;
//     } catch (error) {
//         return error;
//     }
// }

// const SGetAuthById = async (id) => {
//     try {
//         const GetAuthById = await AuthModel.findById(id);
//         return GetAuthById;
//     } catch (error) {
//         return error;
//     }
// }

// const SUpdateAuth = async (id,data) => {
//     try {
//         const GetUserUpdate = await AuthModel.findByIdAndUpdate(
//             { _id: id },
//             { $set: data },
//             { new: false }
//         );

//         return GetUserUpdate;
//     } catch (error) {
//         return error;
//     }
// }

// const SdeleteAuth = async (id) => {
//     try {
//         const GetUserUpdate = await AuthModel.findByIdAndRemove(id);
//         return GetUserUpdate;
//     } catch (error) {
//         return error;
//     }
// }

// module.exports = { SCreateAuth, SGetAuth, SGetAuthById, SUpdateAuth, SdeleteAuth };