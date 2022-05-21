import dbConnect from '../../lib/dbConnect'
import User from '../../models/userModel'

export default async function handler(req, res) {
  const { method } = req

  if (method !== 'GET') {
    return res.status(400).json({ message: 'Wrong request type' })
  }

  await dbConnect()

  const users = await User.find()

  console.log(users)

  res.status(200).json({ users, message: 'wtf' })
}
