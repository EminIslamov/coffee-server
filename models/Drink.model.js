const mongoose = require('mongoose')

const drinkSchema = mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
  hasCaffeine: Boolean,
  volume: Number,
  description: String
})

const Drink = mongoose.model('Coffee', drinkSchema)

module.exports = Drink