const express = require('express');
const fruitsApp = express();
const fruitsRoutes = require("./routes/fruitsRoutes")
const nutritionRoutes = require("./routes/nutritionRoutes")
const cors = require('cors');
fruitsApp.use(cors());

fruitsApp.get('/', (req, res) => {
   res.send('Hello Fruity!')
})
fruitsApp.use(express.json());
fruitsApp.use('/fruits', fruitsRoutes)
fruitsApp.use('/nutrition', nutritionRoutes)

module.exports = fruitsApp