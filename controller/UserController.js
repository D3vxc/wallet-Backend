const {
  SCreateUser,
  SGetUser,
  SGetUserById,
  SUpdateUser,
  SDeleteUser,
} = require("../services/UserServices");
const UserSchema = require("../models/User");
const jwt = require("jsonwebtoken");
const secretKey = require("../const/secretkey");

const CCreateUser = async (req, res) => {
  try {
    const CreateUser = await SCreateUser(req.body);
    res.send(CreateUser);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const CGetUser = async (req, res) => {
  try {
    const GetUser = await SGetUser();
    res.send(GetUser);
  } catch (error) {
    res.send(error);
  }
};

const CGetUserById = async (req, res) => {
  // console.log(req.params.id,"------> this");
  try {
    const GetUserById = await SGetUserById(req.params.id);
    res.send(GetUserById);
  } catch (error) {
    res.send(error);
  }
};

const CUpdateUser = async (req, res) => {
  try {
    const UpdateUser = await SUpdateUser(req.params.id, req.body);
    res.send(UpdateUser);
  } catch (error) {
    res.send(error);
  }
};

const CDeleteUser = async (req, res) => {
  try {
    const DeleteUser = await SDeleteUser(req.params.id);
    res.send(DeleteUser);
  } catch (error) {
    res.send(error);
  }
};

const UserLogin = async (req, res) => {
  try {
    const User = await UserSchema.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (!User) {
      return res.status(404).send("User does not exist");
    }
    console.log(User);
    const token = jwt.sign({ id: User._id }, secretKey);
    res.cookie("access_token", token, {
      httpOnly: true,
      secure: false,
    });
    res.status(200).json({ message: "Logged in " });
  } catch (error) {
    console.log(error);
  }
};

const authorization = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, secretKey);
    // req.id = data.id;
    // const userId = data.id;
    // console.log(userId);
    res.locals.user = data;
    return next();
  } catch (error) {
    return res.sendStatus(403);
  }
};

module.exports = {
  CCreateUser,
  CGetUser,
  CGetUserById,
  CUpdateUser,
  CDeleteUser,
  UserLogin,
  authorization,
};
