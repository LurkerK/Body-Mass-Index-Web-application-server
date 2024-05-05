// create a function to create a web page in 
// response to different URLs
// each URL will have it's own funciton that
// creates the web page that's sent to the browser

const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    console.log(req.query)
    const height = req.query.height
    res.render('index.hbs')
})

// add new routes, restart server

router.get('/cat', function(req, res) {
    res.send('Meow')
})

router.get('/tiger', function(req, res) {
    res.send('Grrr')  // this could be replaced with
    // code that generates a more complex web page

})


module.exports = router

