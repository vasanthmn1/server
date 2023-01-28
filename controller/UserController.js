const asynHandeler = require('express-async-handler')
const User = require('../model/Usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUser = asynHandeler(async (req, res) => {
    console.log(req.body);
    // console.log("s");
    res.status(200).json({ success: "ok" })
    // const { name, email, password } = req.body
    // if (!email || !name || !password) {
    //     res.status(400)
    //     throw new Error("pleace Fill Field")
    // }

    // const alredyUser = await User.findOne({ email })

    // if (alredyUser) {
    //     res.status(400)
    //     throw new Error("Alredy user this email")
    // }

    // const salt = await bcrypt.genSalt(10)
    // const hashpassword = await bcrypt.hash(password, salt)

    // const user = await User.create({
    //     name,
    //     email,
    //     password: hashpassword,
    // })

    // if (user) {
    //     res.status(200).json(
    //         { _id: user.id, name: user.name, email: user.email })
    // } else {
    //     res.status(400)
    //     throw new Error("Invalid User Data")
    // }
})

module.exports = {
    registerUser
}