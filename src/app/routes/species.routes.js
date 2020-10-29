const express = require('express')
const route = express.Router()
const Specie = require('./../controllers/species.controller')

route.post('/create', Specie.createSpecie)
route.get('/viewAll', Specie.viewAllSpecies)

module.exports = route