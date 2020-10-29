const disappearedschema = require('./../models/disappeared.model')

class Disappeared {

    createDisappeared(req,res){
        const reqBody = req.body
        const idUser = reqBody['user']

        disappearedschema.create(reqBody, (err,data) => {
            if(err){
                res.status(500).send({message: "Houve um erro ao processar a sua requisição", error: err})
            }else{
                user.findById(idUser, (err, user) =>{
                    if (err) {
                        res.status(500).send({message: "Houve um erro ao processar a sua requisição", error: err})
                    }else{
                        user.disappearedschema.push(disappearedschema)
                        user.save({}, (err) =>{
                            if (err) {
                                res.status(500).send({message: "Houve um erro ao processar a sua requisição", error: err})
                            } else {
                                res.status(201).send({message: "Disappeared criado com sucessso no banco de dados", disappeared: data})                 
                            }
                        })
                    }    
                })
            }
        })
    }

    viewAllDisappeareds(req,res){
        disappearedschema.find({})
        .populate('User', {nome: 1, image: 1})
        .exec((err,data) => {
            if(err){
                res.status(500).send({message: " Houve um erro ao processara sua requisição", error: err})
            }else{
                if (data.length <= 0) {
                    res.status(200).send({message: 'Não há desaparecidos registrados no banco de dados !!'})
                }else{
                    res.status(200).send({message: " Todos os Desaparecidos foram recuperados com sucesso", disappeared: data})
                }
            }
        })
    }

    viewOneDisappeared(req, res){
        const { dissapearedId} = req.params

        if (dissapearedId == undefined || dissapearedId == 'null') {
            res.status(400).send({ message: "The id of the dissapeared must be filled in" })
            }
        disappearedschema.findOne({_id: dissapearedId})
        .populate('User', {nome: 1, image: 1})
        .exec((err, data) => {
            if(err){
                res.status(500).send({message: " Houve um erro ao procesar a sua requisição",error: err})
            }else{
                if(data == null){
                    res.status(200).send({ message: `Dissapeared does not exist in the database` })
                }else{
                    res.status(200).send({message: `Disappared ${id} foi recuperado com sucesso`, data: data})
                }
            }
            
        }) 
        }
    }

module.exports = new Disappeared()