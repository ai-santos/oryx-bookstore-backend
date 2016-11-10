const books = require('google-books-search')
const pgp = require('pg-promise')()
// const data = require('./data.json')
const mongoose = require('mongoose')
const _ = require('underscore')
const fs = require('fs')

//connect to mongodb
mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/oryx-bookstore'
)

const search_results = books.search('the', function(error, results) {
  if ( ! error ) {
    console.log("I'M RUNNING!")
    console.log(_.size(results))
    writeToFile( JSON.stringify(results) )
  } else {
    return error
  }
})

const writeToFile = dataToWrite => {
  fs.writeFile('books.json', dataToWrite, err => console.error("Can't write to json"))
}

const insertGoogleBooks = books.map( bookData => db.books.insert(bookData)) )
}

module.exports = { search_results }