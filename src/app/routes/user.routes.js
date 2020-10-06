const express = require('express')
const route = express.Router()
const User = require('./../controllers/user.controller')

route.post('/create', User.createUser)
route.get('/viewAll', User.viewAllUser)
route.get('/viewOne/:idUser', User.viewOneUser)

module.exports = route