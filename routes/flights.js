import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'


const router = Router()

router.get('/', flightsCtrl.index)
router.get('/new', flightsCtrl.new)
router.get('/:flightId', flightsCtrl.show)
router.post('/', flightsCtrl.create)
router.post(':flightId/meals', flightsCtrl.selectMeal)
router.get('/:flightId/edit', flightsCtrl.edit)
router.put('/:flightId', flightsCtrl.update)
router.post('/:flightId/tickets', flightsCtrl.addTicket)
router.delete('/:flightId', flightsCtrl.delete)

export { router }
