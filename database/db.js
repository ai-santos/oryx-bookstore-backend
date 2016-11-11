const mongoose = require("mongoose")
const DATABASE_URL = 'mongodb://127.0.0.1:27017/18bookstore'
const { Book } = require('../models/book')
const { book_data } = require('../data.js')

const dataMatchingSchema = book_data.map( bookData => {
  return {   
    title: bookData.title,
    description: bookData.description,
    authors: bookData.authors,
    image_url: bookData.thumbnail   
  }
})

const getAllBooks = () => {
  return Book.find()
}

// const getOneBook = (title, callback) => {
//   Book.findOne({ 'title': title,  }, '*', callback())
// }

const addAllBookData = () => {
  return Book.create( dataMatchingSchema )
}

const addOneBook = (request, response) => {
  const { title, author1, author2, description, image_url } = request.body
  const theBook = new Book({ 
    title: title,
    authors: [author1, author2], 
    description: description,
    image_url: image_url 
  })
  return theBook.save()
}

module.exports = { addAllBookData, addOneBook, getAllBooks }