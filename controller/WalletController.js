const { SCreateWallet, SGetWallet, SGetWalletById, SUpdateWallet, SDeleteWallet } = require("../services/WalletServices")

const CCreateWallet = async(req,res) =>{
    const cookie = req.cookies.access_token;
    console.log(cookie,'==>>>')
    try {
        const CreateWallet = await SCreateWallet(req.body.locals);
        res.send(CreateWallet);
    } catch (error) {
        res.send(error);
    }
}

const UserLoggedIn = async (req, res, next) => {
  const { id } = data;
  const uid = id;
  const User = (await Auth.findById(uid)) || (await IamUser.findById(uid));
  res.locals.user = User;
  return next();
};

module.exports = UserLoggedIn;

const CGetWallet = async(req,res) =>{
    console.log(req.bdoy)
    try {
        const GetWallet = await SGetWallet();
        res.send(GetWallet);
    } catch (error) {
        res.send(error);
    }
}

const CGetWalletById = async(req,res) =>{
    // console.log(req.params.id,"------> this");
    try {
        const GetWalletById = await SGetWalletById(req.params.id);
        res.send(GetWalletById);
    } catch (error) {
        res.send(error);
    }
}

const CUpdateWallet = async(req,res) =>{
    try {
        const UpdateWallet = await SUpdateWallet(req.params.id,req.body);
        res.send(UpdateWallet);
    } catch (error) {
        res.send(error);
    }
}

const CDeleteWallet = async(req,res) =>{
    try {
        const DeleteWallet = await SDeleteWallet(req.params.id);
        res.send(DeleteWallet);
    } catch (error) {
        res.send(error);
    }
}

module.exports = { CCreateWallet, CGetWallet, CGetWalletById, CUpdateWallet, CDeleteWallet };