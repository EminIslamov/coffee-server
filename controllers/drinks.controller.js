const Drink = require('../models/Drink.model')

module.exports.drinksController = {
  getAllDrinks: async (req, res) => {
    const drinks = await Drink.find({}, "name price")
    res.json(drinks)
  },

  getDrinksInStock: async (req, res) => {
    const drinks = await Drink.find({inStock: true})
    res.json(drinks)
  },

  getOneDrink: async (req, res) => {
     const drink = await Drink.findById(req.params.id)
    res.json(drink)
  },

  addDrink: async (req, res) => {
    await Drink.create({
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      hasCaffeine: req.body.hasCaffeine,
      volume: req.body.volume,
      description: req.body.description
    })
    res.json('Drink was added')
  },

  deleteDrink: async (req, res) => {
    await Drink.findByIdAndRemove(req.params.id)
    res.json('deleted')
  },

  updateDrink: async (req, res) => {
    await Drink.findByIdAndUpdate(req.params.id, {$set : {...req.body}})
    res.json('drink was changed')
  }
}