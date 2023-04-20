import { Performer } from "../models/performer.js"

function newPerformer(req, res) {
  Performer.find({})
  .then(performers => {
    res.render('performers/new', {
      title: 'Add Performer',
      performers: performers
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}

function create(req, res) {
  Ticket.create(req.body)
  .then(ticket => {
    res.redirect('/tickets/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/tickets/new')
  })
}


export {
  newTicket as new,
  create
}