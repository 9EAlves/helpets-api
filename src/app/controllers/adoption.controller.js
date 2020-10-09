const adoption = require('./../models/adoption.model')

class Adoption {
    createAdoption(req,res){
        const body = req.body

        adoption.create(body, (err, data) => {
            if(err){
                res.status(500).send({ message: 'Error processing your request', error: err })
            }else{
                res.status(201).send({ message: 'Successfully created new adoption!', data: data })
            }
        })
    }

    viewAllAdoption(req,res){
        adoption.find({}, (err, data) =>{
            if(err){
                res.status(500).send({ message: 'Error processing your request', error: err })
            }else{
                res.status(201).send({ message: 'Successfully recovered all adoptions!', data: data })
            }
        })
}

    viewOneAdoption(req, res) {
        const { adoptionId } = req.params

        if (adoptionId == undefined || adoptionId == 'null') {
        res.status(400).send({ message: "The id of the adoption must be filled in" })
        }

        adoption.findOne({ _id: adoptionId })
        .exec((err, data) => {
            if (err) {
            res.status(500).send({ message: "Error processing your request", error: err })
            } else {
            if (data == null) {
                res.status(200).send({ message: `Adoption does not exist in the database` })
            } else {
                res.status(200).send({ message: `Adoption ${data.name} successfully recovered`, data: data })
            }
            }
        })
    }


}

module.exports = new Adoption();