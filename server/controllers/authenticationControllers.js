import { Users } from "../models/User"

module.exports = {
    async register = (req, res) => {
        try {
            const user = await Users.create(req.body)
            user.send(user.toJSON())
        } catch (error) {
            res.status(400).send({error: 'This email account is already in use'})
        }
    }
}