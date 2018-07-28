import mongoose from 'mongoose'
import {SUCCESS, FAILED } from '../constans.js'
const User = mongoose.model('Users')


const getAllUser = async () => {
  try {
    const allUser = await User.find()
    return allUser
  } catch (error) {
    throw error
  }
}

const addNewUser = async (data) => {
  if (data) {
    try {
      const newUser = await User.create(data)
      return newUser
    } catch (error) {
      throw error
    }
  }
  return false
}

module.exports = { getAllUser, addNewUser}