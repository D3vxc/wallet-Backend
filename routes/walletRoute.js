const router = require("express").Router();

const { CCreateWallet, CGetWallet, CGetWalletById, CUpdateWallet, CDeleteWallet } = require("../controller/WalletController")
const {  authorization } = require("../controller/UserController");

router.post("/add_wallet",authorization,CCreateWallet);
router.get("/get_wallet", CGetWallet);
router.get("/get_wallet/:id", CGetWalletById);
router.put("/update_wallet/:id", CUpdateWallet);
router.delete("/delete_wallet/:id", CDeleteWallet);

module.exports = router;