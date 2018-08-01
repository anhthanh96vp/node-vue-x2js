var express = require("express")
var router = express.Router()

router.use("/user", require(__dirname + "/userRoutes"))


module.exports = router
