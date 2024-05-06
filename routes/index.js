// create a function to create a web page in 
// response to different URLs
// each URL will have it's own funciton that
// creates the web page that's sent to the browser

const express = require('express')
const router = express.Router()  // figures out what code to run in response to a request
// typically based on the URL, and the method,

// responds to get request to home page /
router.get('/', function(req, res, next) {
    console.log(req.query)

    res.render('index', { 
        title: 'Body Mass Index',
        author: 'Kirk',
        timePageLoadedAt: new Date(),

     })
})    // get request to the home page


router.get('/bmi-form', function(req, res, next) {
    res.render('body_mass_index_form')
})


router.post('/calculate', function(req, res, next) {
    // access form data
    // const formData = req.query  // for a GET request - read the URL query
    const formData = req.body   // for a POST request
    console.log(formData)

    const height = formData.height
    const weight = formData.weight
    const bmi = weight / (height * height)  // bmi calculation

    res.render('thank_you', { 
        height: height,
        weight: weight,
        bmi: bmi.toFixed(2)
    })
})

// // add new routes, restart server

// router.get('/cat', function(req, res) {
//     res.send('Meow')
// })

// router.get('/tiger', function(req, res) {
//     res.send('Grrr')  // this could be replaced with
//     // code that generates a more complex web page

// })


module.exports = router

