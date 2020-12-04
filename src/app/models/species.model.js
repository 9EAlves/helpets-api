const { Schema, model } = require('mongoose')

const SpeciesSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  }
},
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Species', SpeciesSchema)