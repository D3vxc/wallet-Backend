const {
  ServicesCreateUser,
  ServicesGetUser,
  ServicesGetUserById,
  ServicesUpdateUser,
  ServicesDeleteUser,
} = require("../services/UserServices");
const UserSchema = require("../models/User");
const jwt = require("jsonwebtoken");
const secretKey = require("../const/secretkey");

const ContollerCreateUser = async (req, res) => {
  try {
    const CreateUser = await ServicesCreateUser(req.body);
    console.log("-=--=-=-=-=-=-=-=-=-=-=-=-=-", res);
    res.send(CreateUser);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const ControllerGetUser = async (res) => {
  try {
    const GetUser = await ServicesGetUser();
    res.send(GetUser);
  } catch (error) {
    res.send(error);
  }
};

const ControllerGetUserById = async (req, res) => {
  console.log(req.params.id, "------> this");
  try {
    const GetUserById = await ServicesGetUserById(res.locals.user.id);
    res.send(GetUserById);
  } catch (error) {
    res.send(error);
  }
};

const ControllerUpdateUser = async (req, res) => {
  try {
    const UpdateUser = await ServicesUpdateUser(res.locals.user.id, req.body);
    res.send(UpdateUser);
  } catch (error) {
    res.send(error);
  }
};

const ControllerDeleteUser = async (res) => {
  try {
    const DeleteUser = await ServicesDeleteUser(res.locals.user.id);
    res.send(DeleteUser);
  } catch (error) {
    res.send(error);
  }
};

const UserLogin = async (req, res) => {
  try {
    console.log(req.body);
    const User = await UserSchema.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (!User) {
      return res.status(404).send("User does not exist");
    }
    console.log("userhere", User);
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
    res.locals.user = data;
    return next();
  } catch (error) {
    return res.sendStatus(403);
  }
};

module.exports = {
  ContollerCreateUser,
  ControllerGetUser,
  ControllerGetUserById,
  ControllerUpdateUser,
  ControllerDeleteUser,
  UserLogin,
  authorization,
};
