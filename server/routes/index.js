var express = require('express');
var router = express.Router();

router.use("/test", require(__dirname + "/testRoutes"))

router.post('/register', (req,res)=>{
	console.log("đã vào post")
 console.log('${req.body} :', req.body);
})


module.exports = router;
