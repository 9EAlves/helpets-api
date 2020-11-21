const { Schema, model } = require('mongoose')

const DisappearedSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    publication_type: {
        type: String,
        required: true,
        trim: true
    },
    pet_name: {
        type: String,
        trim: true
    },
    species: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    event_date: {
        type: Date,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    rated: {
        type: Boolean
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)
module.exports = model('Disappeared', DisappearedSchema)