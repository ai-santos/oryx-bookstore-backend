const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({ 
  title: String,
  description: String,
  authors: [String],
  image_url: String
})

const Book = mongoose.model('Book', BookSchema)

module.exports = { Book: Book }