const express = require(`express`)
const route = express.Router()
const Adoption = require('./../../../controllers/adoption.controller')

route.get('/viewAll', Adoption.viewAllAdoption)
route.get('/viewOne/:adoptionId', Adoption.viewOneAdoption)

module.exports = route