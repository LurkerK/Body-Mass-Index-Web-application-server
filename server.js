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

// configure it to use the Handlebars template engine and 
// work with template files in the views directory 
app.set('views', path.join(__dirname, 'views'))
// "views" are wb pages, hns is handlebars
app.set('view engine', 'hbs')


app.use('/', indexRouter)

let server = app.listen(3000)