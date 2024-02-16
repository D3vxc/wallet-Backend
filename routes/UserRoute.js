const router = require("express").Router();

const {
  ContollerCreateUser,
  ControllerGetUser,
  ControllerGetUserById,
  ControllerUpdateUser,
  ControllerDeleteUser,
  UserLogin,
  authorization,
} = require("../controller/UserController");

router.post("/add_user", ContollerCreateUser);
// router.get("/get_user", CGetUser);
// router.get("/get_user/:id", CGetUserById);
router.put("/update_user", authorization, ControllerUpdateUser);
router.delete("/delete_user", authorization, ControllerDeleteUser);

router.post("/user_login", UserLogin);
router.get("/user_logout", authorization, (req, res) => {
  return res
    .clearCookie("access_token")
    .status(200)
    .json({ message: " logged out " });
});
router.get("/me", authorization, ControllerGetUserById);

module.exports = router;
