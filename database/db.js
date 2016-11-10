const mongoose = require("mongoose")
const DATABASE_URL = 'mongodb://127.0.0.1:27017/18bookstore'
const { Book } = require('../models/book')
const { book_data } = require('../data.js')


//get the specific data that matches the schema

const dataMatchingSchema = book_data.map( bookData => {
  return {   
    title: bookData.title,
    description: bookData.description,
    authors: bookData.authors,
    image_url: bookData.thumbnail   
  }
})

//make a call into mongo and pass in the cleaned up data 
const addAllBookData = () => {
  // Book.create( dataMatchingSchema, (err, results) => {
  //   response.json(results)
  // })
  return Book.create( dataMatchingSchema )
}


//user can enter data into the form and on submit


//make a call into mongo to insert a new book
const addOneBook = (request, response) => {
  const { title, author1, author2, description, image_url } = request.body
  // console.log('this is the request.body', request.body)
  const theBook = new Book({ 
    title: title,
    authors: [author1, author2], 
    description: description,
    image_url: image_url 
  })
  return theBook.save()
}



module.exports = { addAllBookData, addOneBook }