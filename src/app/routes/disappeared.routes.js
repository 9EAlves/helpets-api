const express = require('express')
const route = express.Router()
const Disappeared = require('./../controllers/disappeared.controller')

route.post('/create', Disappeared.createDisappeared)
route.get('/viewAll', Disappeared.viewAllDisappeareds)
route.get('/viewOne/:id', Disappeared.viewOneDisappeared)

module.exports = route