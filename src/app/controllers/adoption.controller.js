const adoption = require('./../models/adoption.model')

class Adoption {
    createAdoption(req,res){
        const reqBody = req.body
        const idUser = reqBody['user']

        adoption.create(reqBody, (err, user) => {
            if(err){
                res.status(500).send({ message: 'Error processing your request', error: err })
            }else{
                user.findById(idUser, (err, user) => {
                    if (err) {
                        res.status(500).send({ message: 'Error processing your request', error: err })
                    }else{
                        user.adoption.push(adoption)
                        user.save({}, (err) =>{ 
                            if (err) {
                                res.status(500).send({ message: 'Error processing your request', error: err })
                            }else{
                                res.status(201).send({ message: 'Successfully created new adoption!', data: data })
                            }
                        })
                    }
                })
            }
        })
    }

    viewAllAdoption(req,res){

        adoption.find({})
        .populate('User', {nome: 1, image: 1})
        .exec((err, data) =>{
            if(err){
                res.status(500).send({ message: 'Error processing your request', error: err })
            }else{
                if (data.length <= 0) {
                    res.status(201).send({ message: 'There are no adoptions registered in the database!!' })
                }else{
                    res.status(201).send({ message: 'Successfully recovered all adoptions!', data: data })
                }
            }
        })
}

    viewOneAdoption(req, res) {
        const { adoptionId } = req.params

        if (adoptionId == undefined || adoptionId == 'null') {
        res.status(400).send({ message: "The id of the adoption must be filled in" })
        }

        adoption.findOne({ _id: adoptionId })
        .populate('User', {nome: 1, image: 1})
        .exec((err, data) => {
            if (err) {
            res.status(500).send({ message: "Error processing your request", error: err })
            } else {
            if (data == null) {
                res.status(200).send({ message: `Adoption does not exist in the database` })
            } else {
                res.status(200).send({ message: `Adoption ${data.species} successfully recovered`, data: data })
            }
            }
        })
    }


}

module.exports = new Adoption();