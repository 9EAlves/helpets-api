const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.PORT || 3000
const database = require('./src/config/database')

const UserRoutes = require('./src/app/routes/user.routes')
const AdoptionRoutes = require('./src/app/routes/adoption.routes')
const AdRoutes = require('./src/app/routes/ad.routes')
const DisappearedRoutes = require('./src/app/routes/disappeared.routes')
const SpeciesRoutes = require('./src/app/routes/species.routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json' }))

app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-Header', "Origin, X-Requested-With, Content-Type, Accept")
  next()
})


app.get('/', (req, res) => {
  res.send({ message: `API escutado na porta ${PORT}` })
})

app.use('/user', UserRoutes)
app.use('/adoption', AdoptionRoutes)
app.use('/ad', AdRoutes)
app.use('/disappeared', DisappearedRoutes)
app.use('/species', SpeciesRoutes)


app.use('*', (req, res) => {
  res.status(404).send({ message: 'API não encontrada!' })
})

app.listen(PORT, () => {
  console.log(`API escutando na porta ${PORT}`)
})