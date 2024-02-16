const router = require("express").Router();

const { ControllerCreateTransfer, ControllerGetTransfer } = require("../controller/TansferController");
const { authorization } = require("../controller/UserController");

router.post("/add_transfer",ControllerCreateTransfer);
router.get("/get_transfer",authorization,ControllerGetTransfer);
module.exports = router;