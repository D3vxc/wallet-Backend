const {  ServicesGetWallet } = require("../services/WalletServices");

const UserLoggedIn = async (req, res, next) => {
  const { id } = data;
  const uid = id;
  const User = (await Auth.findById(uid)) || (await IamUser.findById(uid));
  res.locals.user = User;
  return next();
};

module.exports = UserLoggedIn;

const ControllerGetWallet = async (req, res) => {
  console.log(req.bdoy);
  try {
    const GetWallet = await  ServicesGetWallet(res.locals.user.id);
    res.send(GetWallet);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { ControllerGetWallet };
