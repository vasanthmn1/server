const express = require('express')
const { registerUser, get } = require('../controller/UserController')
const routes = express.Router()

routes.post('/', registerUser)
routes.get('/', get)


module.exports = routes