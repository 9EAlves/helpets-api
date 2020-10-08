const disappearedschema = require('./../models/disappeared.model')

class Disappeared {

    createDisappeared(req,res){
        const body = req.body

        disappearedschema.create(body, (err,data) => {
            if(err){
                res.status(500).send({message: "Houve um erro ao processar a sua requisição", error: err})
            }else{
                res.status(201).send({message: "Disappeared criado com sucessso no banco de dados", disappeared: data})
            }
        })
    }
}
module.exports = new Disappeared()