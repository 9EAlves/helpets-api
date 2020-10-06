const express = require('express')
const route = express.Router()
const User = require('./../controllers/user.controller')

route.post('/create', User.createUser)

module.exports = route