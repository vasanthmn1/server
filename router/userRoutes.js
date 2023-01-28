const express = require('express')
const { registerUser } = require('../controller/UserController')
const routes = express.Router()

routes.post('/', registerUser)

module.exports = routes