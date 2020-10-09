const ad = require('./../models/ad.models')

class Ad {

    createAd(req, res) {
        const body = req.body

        ad.create(body, (err, data) => {
            if (err) {
                res.status(500).send({ message: "Error processing your request", error: err })
            } else {
                res.status(201).send({ message: "Sucessfully recovered all Ad!", data: data })
            }
        })
    }

    viewallAd(req, res) {
        const campos = req.query.campos 
    
            ad.find({}) 
            .sort({ num_image: 1 })
            .exec((err, data) => {
                if (err) {
                    res.status(500).send({ message: "Error processing your request", error: err })
                } else {
                    res.status(201).send({ message: "Sucessfully created new user", data: data })
                }
            })
        }
}
    module.exports = new Ad()

