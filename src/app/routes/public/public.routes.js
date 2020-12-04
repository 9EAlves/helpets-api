const express = require("express")
const app = express()

const AdRoutes = require('./routes/ad.routes')
const AdoptionRoutes = require('./routes/adoption.routes')
const DisappearedRoutes = require('./routes/disappeared.routes')
const UserRoutes = require('./routes/user.routes')

app.use('/user', UserRoutes)
app.use('/adoption', AdoptionRoutes)
app.use('/ad', AdRoutes)
app.use('/disappeared', DisappearedRoutes)

module.exports = app