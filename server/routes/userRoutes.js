import express from "express"
const router = express.Router()
import { SUCCESS, FAILED } from "../constans.js"

import UserControllers from "../controllers/userControllers.js"

router.get("/get", async (req, res) => {
	try {
		let allUser = await UserControllers.getAllUsers()
		if (allUser) {
			res.json({
				result: SUCCESS,
				data: allUser,
				message: `Lấy danh sách user thành công`
			})
		} else {
			res.json({
				result: FAILED,
				data: "",
				message: `Lỗi trong quá trình lấy danh sách user`
			})
		}
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			message: `Lỗi xảy ra trong quá trình lấy dữ liệu user từ cơ sở dữ liệu ${err}`
		})
	}
})

router.post('/post', async (req,res) => {
	let data = req.body
	try {
		let newUser = await UserControllers.addNewUser(data)
		if (newUser) {
			res.json({
				result: SUCCESS,
				data: newUser,
				message: `Tạo mới user thành công`
			})
		} else {
			res.json({
				result: FAILED,
				data: "",
				message: `Lỗi trong quá trình tạo mới user`
			})
		}
	} catch (error) {
		res.json({
			result: FAILED,
			data: "",
			message: `Lỗi xảy ra trong quá trình tạo mới user ở cơ sở dữ liệu ${err}`
		})
	}
})

module.exports = router
