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

}
module.exports = new User();