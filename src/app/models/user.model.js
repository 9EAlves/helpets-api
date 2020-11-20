const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  user_login: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  user_type: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  cnpj: {
    type: String,
    trim: true
  },
  contact: {
    cell_phone: {
      type: Number,
      required: true
    },
    instagram: {
      type: String,
      trim: true
    },
    facebook: {
      type: String,
      trim: true
    },
    landline: {
      type: Number
    }
  },
  bank_account: {
    type: String,
    trim: true
  },
  paypal_account: {
    type: String,
    trim: true
  },
  address: {
    city: {
      type: String,
      trim: true
    },
    neighborhood: {
      type: String,
      trim: true
    },
    street: {
      type: String,
      trim: true
    },
    number: {
      type: String,
      trim: true
    },
    apartament_number: {
      type: String,
      trim: true
    }
  }
},
  {
    timestamps: true,
    versionKey: false
  }
)
module.exports = model('User', UserSchema);