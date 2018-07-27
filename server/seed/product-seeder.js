// import Product from '../models/Product'

// import mongoose from 'mongoose'

// mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true })

// const products = [
//     new Product({
//         imagePath: 'https://mdbootstrap.com/img/Photos/Others/images/43.jpg',
//         title: 'Gothic Video Game',
//         description: 'Awesome Game!!!',
//         price: 10
//     }),
//     new Product({
//         imagePath: 'https://mdbootstrap.com/img/Photos/Others/images/43.jpg',
//         title: 'Gothic Video Game',
//         description: 'Awesome Game!!!',
//         price: 10
//     }),
//     new Product({
//         imagePath: 'https://mdbootstrap.com/img/Photos/Others/images/43.jpg',
//         title: 'Gothic Video Game',
//         description: 'Awesome Game!!!',
//         price: 10
//     }),
//     new Product({
//         imagePath: 'https://mdbootstrap.com/img/Photos/Others/images/43.jpg',
//         title: 'Gothic Video Game',
//         description: 'Awesome Game!!!',
//         price: 10
//     })
// ]

// console.log('dsadsaddasdsassśaaaaaaaaaadsadsaddasdsassśaaaaaaaaaa');
// products.forEach(async (product, index) => {
//     try {
//         const result = await product.save();
//         if (index == (products.length - 1)) {
//             mongoose.disconnect()
//         }
//     } catch (err) {
//         mongoose.disconnect()
//     }
// });
// // export const generateFakeData = () => {
// //     products.forEach(async (product, index) => {
// //         try {
// //             const result = await product.save();
// //             if (index == (products.length - 1)) {
// //                 mongoose.disconnect()
// //             }
// //         } catch (err) {
// //             mongoose.disconnect()
// //         }
// //     });
// // }


// // mongod --auth --port 27017 --dbpath /Users/thanh/Desktop/shopping-nodejs/database

// // mongo --port 27017 -u "admin" -p "admin" --authenticationDatabase "shopping"