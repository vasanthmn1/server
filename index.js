const express = require('express')
const connetDB = require('./config/conntingDB')
// const { db } = require('./model/Usermodel')
const cors = require('cors')
const colors = require('colors')
const parser = require('body-parser')
const dotenv = require('dotenv').config()
const user = require('./router/userRoutes')
const { errHandel } = require('./middleware/errmiddelware')
const port = process.env.PORT

const app = express()
app.use(cors())

app.use(express)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


connetDB()
app.use('/user', user)
app.use(errHandel)
app.listen(port, () => {
    console.log(`conting${port}`);
})