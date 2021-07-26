const { Router } = require("express");
const { drinksController } = require("../controllers/drinks.controller");

const router = Router();

router.get("/drinks", drinksController.getAllDrinks);

router.get("/drinks/in-stock", drinksController.getDrinksInStock)

router.get("/drinks/:id", drinksController.getOneDrink)

router.post("/drinks", drinksController.addDrink);

router.delete("/drinks/:id", drinksController.deleteDrink)

router.patch("/drinks/:id", drinksController.updateDrink)

module.exports = router;
