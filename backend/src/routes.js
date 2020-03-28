const express = require('express')

const IncidentContoller = require('./controllers/incident_controller')
const OngContoller = require('./controllers/ong_controller')
const ProfileContoller = require('./controllers/profile_controller')
const SessionController = require('./controllers/session_controller')


const routes = express.Router()


routes.post('/sessions', SessionController.create)


routes.get('/ongs', OngContoller.index)
routes.post('/ongs', OngContoller.create)

routes.get('/incidents', IncidentContoller.index)
routes.post('/incidents', IncidentContoller.create)
routes.delete('/incidents/:id', IncidentContoller.delete)

routes.get('/profile', ProfileContoller.index)

module.exports = routes