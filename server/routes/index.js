var express = require('express');
var router = express.Router();

router.use("/test", require(__dirname + "/testRoutes"))

router.post('/register', (req,res)=>{
	console.log(req.body)
  res.send({
  	messenge: `hello word ${req.body.email, req.body.password}`
  })
})

module.exports = router;
