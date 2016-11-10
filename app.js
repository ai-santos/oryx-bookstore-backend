const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { Book } = require('./models/book')
const books = require('google-books-search')
const index = require('./routes/index')
const users = require('./routes/users')
const { addAllBookData } = require('./database/db.js')

const app = express()


//connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/oryx-bookstore'
)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', index)
app.use('/users', users)

//ROUTE to GET all books 
app.get('/api/books', function (request, response) {
  addAllBookData()
    .then((books) =>{
      response.json(books)
    })
    .catch((error) => {
      response.json({message: 'error'})
    })
  // Book.find(function (err, books) {
  //   response.json(books)
  // })
})
 

app.get('/api/test', function (request, response) {
  books.search('the', function(error, results) {
    if ( ! error ) {
      response.json(results)
    } else {
      return error
    }
  })
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})


module.exports = app;
