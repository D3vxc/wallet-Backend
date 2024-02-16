const mongoose = require("mongoose");
const express = require("express");
const cookieparser = require("cookie-parser");
const bodyparser = require("body-parser");
const cors = require("cors");
const UserRoute = require("./routes/UserRoute");
const WalletRoute = require("./routes/walletRoute");
const TransferRoute = require("./routes/TransferRoute");
const app = express();
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(cookieparser());
app.use(bodyparser.json());

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);

app.use("/user", UserRoute);
app.use("/wallet", WalletRoute);
app.use("/transfer", TransferRoute);

const link =
  // "mongodb+srv://Songoku:kakarot9265@cluster0.yp7zgeq.mongodb.net/?retryWrites=true&w=majority";
  "mongodb+srv://Songoku:kakarot9265@cluster0.vtftduc.mongodb.net/?retryWrites=true&w=majority";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(link, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

app.listen(7000, () => {
  console.log("running on port 7000");
});
