const user = require('./../models/user.model')

class User {

  createUser(req, res) {
    const reqBody = req.body

    user.create(reqBody, (err, data) => {
      if (err) {
        res.status(500).send({ message: 'Error processing your request', error: err })
      } else {
        res.status(201).send({ message: 'Successfully created new user!', data: data })
      }
    })
  }

  viewAllUser(req, res) {
    user.find({ user_type: "ong" })
      .sort({ name: 1 })
      .exec((err, data) => {
        if (err) {
          res.status(500).send({ message: "Error processing your request", error: err })
        } else {
          if (data.length <= 0) {
            res.status(200).send({ message: "No users were found in the database" })
          } else {
            res.status(200).send({ message: "Successfully recovered all users!", data: data })
          }
        }
      })
  }

  viewOneUser(req, res) {
    const { idUser } = req.params

    if (idUser == undefined || idUser == 'null') {
      res.status(400).send({ message: "The id of the user must be filled in" })
    }

    user.findOne({ _id: idUser })
      .exec((err, data) => {
        if (err) {
          res.status(500).send({ message: "Error processing your request", error: err })
        } else {
          if (data.length <= 0) {
            res.status(200).send({ message: `User ${idUser} does not exist in the database` })
          } else {
            res.status(200).send({ message: `User ${idUser} successfully recovered`, data: data })
          }
        }
      })
  }

}
module.exports = new User();