const express = require('express')
const route = express.Router()
const Disappeared = require('./../../../controllers/disappeared.controller')

route.post('/create', Disappeared.createDisappeared)
route.get('/viewAll', Disappeared.getWithParams)
route.get('/viewOne/:disappearedId', Disappeared.viewOneDisappeared)
route.put('/update/:disappearedId', Disappeared.updateDisappeared)
route.delete('/delete/:disappearedId', Disappeared.deleteDisappeared)

module.exports = route