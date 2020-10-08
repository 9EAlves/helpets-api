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

    viewAllDisappeareds(req,res){
        disappearedschema.find({}, (err,data) => {
            if(err){
                res.status(500).send({message: " Houve um erro ao processara sua requisição", error: err})
            }else{
                res.status(200).send({message: " Todos os Disappeareds foram recuperados com sucesso", disappeared: data})
            }
        })
    }

    viewOneDisappeared(req, res){
        const id = req.params.id

        disappearedschema.find({_id: id}, (err, data) => {
            if(err){
                res.status(500).send({message: " Houve um erro ao procesar a sua requisição",error: err})
            }else{
                res.status(200).send({message: `Disappared ${id} foi recuperado com sucesso`, data: data})
            }
        })
    }
}
module.exports = new Disappeared()