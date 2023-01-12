const router = require("express").Router();

const { CCreateUser, CGetUser, CGetUserById, CUpdateUser, CDeleteUser, UserLogin ,authorization } = require("../controller/UserController")

router.post("/add_user", CCreateUser);
router.get("/get_user", CGetUser);
router.get("/get_user/:id", CGetUserById);
router.put("/update_user/:id", CUpdateUser);
router.delete("/delete_user/:id", CDeleteUser);

router.post("/user_login", UserLogin );
router.get("/user_logout", authorization, (req,res) =>{
    return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: " logged out "} );
});

module.exports = router;