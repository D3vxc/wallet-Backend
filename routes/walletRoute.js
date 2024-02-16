const router = require("express").Router();

const { ControllerGetWallet } = require("../controller/WalletController");
const { authorization } = require("../controller/UserController");

router.get("/", authorization, ControllerGetWallet);

module.exports = router;
