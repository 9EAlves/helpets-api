const express = require('express')
const route = express.Router()
const Disappeared = require('../../controllers/disappeared.controller')

route.post('create', Disappeared.createDisappeared)

module.exports = route