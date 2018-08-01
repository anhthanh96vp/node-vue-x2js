
import express from "express"
const router = express.Router()
import { isNumeric, isEmail } from 'validator';
import { SUCCESS, FAILED } from "../constans.js"

import UserControllers from '../controllers/userControllers'

router.post("/register", async (req, res) => {
    let data = req.body
    try {
		let newUser = await UserControllers.addNewUser(data)
		if (newUser) {
			res.json({
                status: SUCCESS,
				data: newUser,
				message: `Tạo mới user thành công`
			})
		} else {
			res.json({
				status: FAILED,
				data: {},
				message: `Lỗi trong quá trình tạo mới user`
			})
		}
	} catch (error) {
		res.json({
			status: FAILED,
			data: {},
			message: `Lỗi xảy ra trong quá trình tạo mới user ở cơ sở dữ liệu ${error}`
		})
	}
})

module.exports = router