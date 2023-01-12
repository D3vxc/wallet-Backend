const router = require("express").Router();

const { CCreateTransfer, CGetTransfer, CGetTransferById, CUpdateTransfer, CDeleteTransfer } = require("../controller/TansferController")

router.post("/add_transfer",CCreateTransfer);
router.get("/get_transfer", CGetTransfer);
router.get("/get_transfer/:id", CGetTransferById);
router.put("/update_transfer/:id", CUpdateTransfer);
router.delete("/delete_transfer/:id", CDeleteTransfer);

module.exports = router;