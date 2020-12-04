const express = require('express')
const route = express.Router()
const User = require('./../../../controllers/user.controller')

route.post('/create', User.createUser)
route.get('/viewAll', User.getWithParams)
route.get('/viewOne/:userId', User.viewOneUser)

module.exports = route