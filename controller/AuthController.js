// const { SCreateAuth, SGetAuth, SGetAuthById,SUpdateAuth,SdeleteAuth} = require('../services/AuthServices');
// const AuthSchema = require("../models/Auth");
// const jwt = require("jsonwebtoken");
// const secretKey = "secretkey";

// const CCreateAuth =  async(req,res) => {
//     console.log(req.body)
//     try {
//         const Data = await SCreateAuth(req.body)
//         res.send(Data)
//     } catch (error) {
//         res.send(error)
//     }
// }

// const CGetAuth =  async(req,res) => {
//     console.log(req.body)
//     try {
//         const Data = await SGetAuth()
//         res.send(Data)
//     } catch (error) {
//         res.send(error)
//     }
// }

// const CGetAuthById = async (req,res) => {
//     // console.log(req.params.id, "--------------->this")
//     try {
//         const Data = await SGetAuthById(req.params.id);
//         res.send(Data)
//     } catch (error) {
//         res.send(error)
//     }
// }

// const CUpdateAuth = async (req,res) => {
//     try {
//         const Data = await SUpdateAuth(req.params.id,req.body);
//         res.send(Data)
//     } catch (error) {
//         res.send(error)
//     }
// }

// const CdeleteAuth = async (req,res) => {
//     try {
//         const Data = await SdeleteAuth(req.params.id);
//         res.send(Data)
//     } catch (error) {
//         res.send(error)
//     }
// }

// const AuthLogin = async (req,res) => {
//     try {
//         const User = await AuthSchema.findOne({
//             Username: req.body.Username,
//             Password: req.body.Password,
//         });
//         if(!User)
//         {
//             return res.status(403).send("User does not exist");
//         }
//         console.log(User);
//         const token = jwt.sign({ id: User._id }, secretKey);
//          res.cookie("access_token",token, {
//             httpOnly: true,
//             secure: false,
//         })
//         res.status(200)
//         .json({ message: "Logged in " });
//     } catch (error) {
//         console.log(error);
//     }
// }

// const authorization = (req,res,next) => {
//     const token = req.cookies.access_token;
//     if(!token){
//         return res.sendStatus(403);
//     }
//     try {
//         const data = jwt.verify(token,secretKey);
//         req.id = data.id;
//         const userId = data.id;
//         console.log(userId);
//         return next();
//     } catch (error) {
//         return res.sendStatus(403);
//     }
// }

// module.exports = { CCreateAuth, CGetAuth, CGetAuthById, CUpdateAuth, CdeleteAuth, AuthLogin, authorization };