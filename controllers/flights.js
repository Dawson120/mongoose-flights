import { Flight } from "../models/flight.js";
import { Meal } from "../models/meal.js";

function newFlight (req, res) {
  res.render('flights/new', {
    title: 'New Flight'
  })
}

function create(req, res) {
  Flight.create(req.body)
    .then(flight => {
      res.redirect('/flights')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/flights/new')
    })
}

function index (req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights: flights,
      title: 'All Flights',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.flightId)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function show(req, res) {
  Flight.findById(req.params.flightId)
  .then (flight => {
    Meal.find({_id: {$nin: flight.meals}})
    .then (meals => {
    res.render('flights/show', {
      flight: flight,
      title: "About Flight",
      meals: meals
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/flights')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

function edit(req, res) {
  Flight.findById(req.params.flightId)
  .then (flight => {
    res.render('flights/edit', {
      flight: flight,
      title: "Edit Flight"
    })
  })
}

function update(req, res) {
  Flight.findByIdAndUpdate(req.params.flightId, req.body, {new: true})
  .then(flight => {
    res.redirect(`/flights`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function addTicket(req, res) {
  Flight.findById(req.params.flightId)
  .then(flight => {
    flight.ticketInfo.push(req.body)
    flight.save()
    .then(() => {
      res.redirect(`/flights/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function selectMeal(req, res) {
  flight.findById(req.params.flightId)
  .then(flight => {
    flight.meals.push(req.body.mealId)
    flight.save()
    .then(() => {
      res.redirect(`/flight/${flight._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/flights')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  deleteFlight as delete,
  edit,
  update,
  addTicket,
  selectMeal
}