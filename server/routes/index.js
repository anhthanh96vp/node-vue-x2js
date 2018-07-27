var express = require('express');
var router = express.Router();
// //import { generateFakeData } from '../seed/product-seeder';
// import Product from '../models/Product'

// /* GET home page. */
// router.get('/', async (req, res) => {
//   // await generateFakeData();
//   try {
//     let products = Product.find((err, docs) => {
  
//       let productChunks = []
//       let chunkSize = 4
//       for (let i = 0; i < docs.length; i += chunkSize) {
//         productChunks.push(docs.slice(i, i + chunkSize))
//       }
//       console.log('productChunks :', productChunks);
//       res.render('shop/index', { title: 'shopping card', products: productChunks });
//     })
//   } catch (e) {
//     console.log('e :', e);
//   }
// });

router.post('/register', (req,res)=>{
  res.send({
  	messenge: `hello word ${req.body.email}`
  })
})
module.exports = router;
