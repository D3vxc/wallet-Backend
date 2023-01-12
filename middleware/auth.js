const { verify } = require("jsonwebtoken");
const secretKey = require("../const/secretkey");

const ProtectedRoute = (req,res ,next) =>{
    const cookie = req.cookies["jwt"];
    const data = verify(cookie , secretKey)
    if (!data) {
        res.sendStatus(403)
        return;
    }
    res.locals.user = data;
    return next();
}
module.exports = ProtectedRoute;