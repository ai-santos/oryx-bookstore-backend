const mongoose = require("mongoose")
const DATABASE_URL = 'mongodb://127.0.0.1:27017/18bookstore'
const { Book } = require('../models/book')
const { book_data } = require('../data.js')


// const BookModel = db.model( 'Book', {
//   title: { type: String },
//   author: { type: String },
//   img_url: { type:String }
// })


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



// const addToDB = (request,response,next) => {
//   const { title, author, description, img_url } = request.body
//   const theBook = new Book({ 
//     title: title,
//     author: author, 
//     description: description,
//     img_url: img_url 
//   })
//   theBook.save()
//   console.log("TEST SUCCESS")
//   // response.status( 200 ).json({ status: 'success', message: 'Added book.' })
//   // next()
  
// }

// const search_results = books.search('the', function(error, results) {
//   if ( ! error ) {
//     console.log("I'M RUNNING!")
//     console.log(_.size(results))
//     writeToFile( JSON.stringify(results) )
//   } else {
//     return error
//   }
// }) 

module.exports = { addAllBookData }