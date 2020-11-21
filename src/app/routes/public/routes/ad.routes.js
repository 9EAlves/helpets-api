const express = require('express')
const route = express.Router()
const Ad = require('./../../../controllers/ad.controller')

route.get('/viewAll', Ad.viewallAd)

module.exports = route