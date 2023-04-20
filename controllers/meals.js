import { Meal } from "../models/meal.js"


function newMeal (req, res) {
  Meal.find({})
  .then(meals => {
  res.render('meals/new', {
    meals: meals,
    title: 'New Meal'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights')
  })
}


export {
  newMeal as new,
}