const express = require("express");
const fruitsRouter = express.Router();
const fruitsController = require("../controllers/fruitsController")

fruitsRouter.get('/', fruitsController.showAllFruits)
fruitsRouter.get("/:name", fruitsController.showFruit)
fruitsRouter.post("/", fruitsController.createFruit)
fruitsRouter.delete("/:name", fruitsController.deleteFruit)
fruitsRouter.put("/:name", fruitsController.putFruit)
fruitsRouter.patch("/:name", fruitsController.patchFruit)

module.exports = fruitsRouter
