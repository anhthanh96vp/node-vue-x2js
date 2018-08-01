
import Users from "../models/User"

const addNewUser = async data => {
    console.log('data :', data);
	if (data) {
		try {
			const newUser = await Users.create(data)
			return newUser
		} catch (error) {
			throw error
		}
	}
	return false
}

module.exports = { addNewUser }
