const {
  ServicesCreateTransfer,
  ServicesGetTransfer,
} = require("../services/TranferServices");

const ControllerCreateTransfer = async (req, res) => {
  console.log(req.body);
  try {
    const CreateTransfer = await ServicesCreateTransfer(
      req.body
      // "63bfe20fd856c82aedfec83f"
      // res.locals.user.id
    );
    res.send(CreateTransfer);
  } catch (error) {
    res.status(403).send(error);
  }
};
const ControllerGetTransfer = async (req, res) => {
  try {
    const CreateTransfer = await ServicesGetTransfer();
    res.send(CreateTransfer);
  } catch (error) {
    res.status(403).send(error);
  }
};

module.exports = {
  ControllerCreateTransfer,
  ControllerGetTransfer,
};
