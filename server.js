// this is the main file for the web server.
// a web server creates web pages in response to a request.
// the browser can display that page to the user.
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

// routing is figuring out what page the user wants.
// typically based on a URL (browser address bar).
// we'll delegate that to routes/index.js
const indexRouter = require('./routes/index.js')

const app = express()

// enable parsing of POST request form body
app.use(bodyParser.urlencoded({ extended: false }))


const staticFileLocation = path.join(__dirname, 'public')
app.use(express.static(staticFileLocation))


// configure it to use the Handlebars template engine and 
// work with template files in the views directory 
app.set('views', path.join(__dirname, 'views'))
// "views" are wb pages, hbs is handlebars
app.set('view engine', 'hbs')  // use handlebars to generate views

app.use('/', indexRouter)  // all requests to the app will be passed to indexRouter

// start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})