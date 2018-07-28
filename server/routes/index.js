var express = require('express');
var router = express.Router();

// router.use("/users", require(__dirname + "/userRoutes"))

router.post('/register', (req,res)=>{
	console.log(req.body)
  res.send({
  	messenge: `hello word ${req.body.email, req.body.password}`
  })
})

module.exports = router;
