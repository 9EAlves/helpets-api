const express = require(`express`)
const route = express.Router()
const Adoption = require('./../../../controllers/adoption.controller')


route.post('/create', Adoption.createAdoption)
route.get('/viewAll', Adoption.getWithParams)
route.get('/viewOne/:adoptionId', Adoption.viewOneAdoption)
route.put('/update/:adoptionId', Adoption.updateAdoption)
route.delete('/delete/:adoptionId', Adoption.deleteAdoption)

module.exports = route