const mongoose = require('mongoose')
const Schema = mongoose.Schema
//const search_results = require('../query')

const BookSchema = new Schema({ 
  title: String,
  description: String,
  author: String,
  image_url: String
})

const Book = mongoose.model('Book', BookSchema)
//const book1 = mongoose.model(search_results[0], BookSchema)

module.exports = { Book: Book }