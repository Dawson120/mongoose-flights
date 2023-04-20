import { Flight } from "../models/flight.js";

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
    res.render('flights/show', {
      flight: flight,
      title: "About Flight",
    })
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
}