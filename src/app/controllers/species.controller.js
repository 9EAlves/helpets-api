const specie = require('./../models/species.model')

class Specie {

  createSpecie(req, res) {
    specie.create(req.body, (err, data) => {
      if (err) {
        res.status(500).send({ message: 'Error processing your request', error: err })
      } else {
        res.status(201).send({ message: 'Successfully created new specie!', data: data })
      }
    })
  }

  viewAllSpecies(req, res) {
    specie.find({}, (err, data) => {
      if (err) {
        res.status(500).send({ message: 'Error processing your request', error: err })
      } else {
        res.status(200).send({ message: 'Successfully recovered all specie!', data: data })
      }
    })
  }

}

module.exports = new Specie();