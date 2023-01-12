const {
  SCreateTransfer,
  SGetTransfer,
  SGetTransferById,
  SUpdateTransfer,
  SDeleteTransfer,
} = require("../services/TranferServices");

const CCreateTransfer = async (req, res) => {
  try {
    const CreateTransfer = await SCreateTransfer(req.body);
    res.send(CreateTransfer);
  } catch (error) {
    res.send(error);
  }
};

const CGetTransfer = async (req, res) => {
  try {
    const GetTransfer = await SGetTransfer();
    res.send(GetTransfer);
  } catch (error) {
    res.send(error);
  }
};

const CGetTransferById = async (req, res) => {
  // console.log(req.params.id,"------> this");
  try {
    const GetTransferById = await SGetTransferById(req.params.id);
    res.send(GetTransferById);
  } catch (error) {
    res.send(error);
  }
};

const CUpdateTransfer = async (req, res) => {
  try {
    const UpdateTransfer = await SUpdateTransfer(req.params.id, req.body);
    res.send(UpdateTransfer);
  } catch (error) {
    res.send(error);
  }
};

const CDeleteTransfer = async (req, res) => {
  try {
    const DeleteTransfer = await SDeleteTransfer(req.params.id);
    res.send(DeleteTransfer);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  CCreateTransfer,
  CGetTransfer,
  CGetTransferById,
  CUpdateTransfer,
  CDeleteTransfer,
};
