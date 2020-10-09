const express = require('express')
const route = express.Router()
const Ad = require('../controllers/ad.controller')

route.post('/create', Ad.createAd)
route.get('/viewAll', Ad.viewallAd)

module.exports = route