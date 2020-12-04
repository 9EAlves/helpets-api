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

    getWithParams(req, res) {
        let query = {}
        let { columnSort, valueSort } = req.query

        disappearedschema
            .find(query)
            .sort([[columnSort, valueSort]])
            .populate('user', { name: 1, description: 1, contact: 1, address: 1 })
            .exec((err, data) => {
                if (err) {
                    res.status(500).send({ message: " Houve um erro ao processara sua requisição", error: err })
                } else {
                    if (data.length <= 0) {
                        res.status(204).send({ message: 'Não há desaparecidos registrados no banco de dados !!' })
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



    updateDisappeared(req, res) {
        const { disappearedId } = req.params
        const reqBody = req.body

        disappearedschema.updateOne({ _id: disappearedId }, { $set: { "rated": true } }, (err, disappeared) => {
            if (err) {
                res.status(500).send({ message: 'Error processing your request' })
            } else {
                res.status(200).send({ message: 'disappeared was successfully updated, data: disappeared' })
            }
        })
    }


    deleteDisappeared(req, res) {
        const { disappearedId } = req.params

        disappearedschema.deleteOne({ _id: disappearedId }, (err, result) => {
            if (err) {
                res.status(500).send({ message: 'Error processing your request' })
            } else {
                res.status(200).send({ message: 'disappeared successfully deleted, data: result' })
            }

        })
    }

}


module.exports = new Disappeared()