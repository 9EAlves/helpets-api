const {Schema, model} = require('mongoose')

const AdSchema = new Schema({
    num_image: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)
module.exports = model('Ad', AdSchema);