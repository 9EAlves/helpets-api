const express = require('express')
const route = express.Router()
const Disappeared = require('./../../../controllers/disappeared.controller')

route.get('/viewAll', Disappeared.viewAllDisappeareds)
route.get('/viewOne/:disappearedId', Disappeared.viewOneDisappeared)

module.exports = route