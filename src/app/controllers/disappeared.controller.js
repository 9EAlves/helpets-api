const { Mongoose } = require('mongoose')
const disappearedschema = require('./../models/disappeared.model')

class Disappeared {

    createDisappeared(req, res) {
        const reqBody = req.body
        const idUser = reqBody['user']

        disappearedschema.create(reqBody, (err, data) => {
            if (err) {
                res.status(500).send({ message: 'Error processing your request', error: err })
            } else {
                res.status(201).send({ message: 'Successfully created new disappeared!', data: data })
            }
        })
    }

    viewAllDisappeareds(req, res) {
        disappearedschema.find({})
            // .populate('User', {nome: 1, image: 1})
            .exec((err, data) => {
                if (err) {
                    res.status(500).send({ message: " Houve um erro ao processara sua requisição", error: err })
                } else {
                    if (data.length <= 0) {
                        res.status(200).send({ message: 'Não há desaparecidos registrados no banco de dados !!' })
                    } else {
                        res.status(200).send({ message: " Todos os Desaparecidos foram recuperados com sucesso", data: data })
                    }
                }
            })
    }

    viewOneDisappeared(req, res) {
        const { disappearedId } = req.params

        //   console.log(disappearedId)
        if (disappearedId == undefined || disappearedId == 'null') {
            res.status(400).send({ message: "The id of the disappeared must be filled in" })
        }
        disappearedschema.findOne({ _id: disappearedId })
            .populate('user', { name: 1, description: 1, contact: 1, address: 1 })
            .exec((err, data) => {
                if (err) {
                    res.status(500).send({ message: " Houve um erro ao procesar a sua requisição", error: err })
                } else {
                    if (data == null) {
                        res.status(200).send({ message: `Disappeared does not exist in the database` })
                    } else {
                        res.status(200).send({ message: `Disappeared ${data._id} foi recuperado com sucesso`, data: data })
                    }
                }

            })
    }
}

module.exports = new Disappeared()