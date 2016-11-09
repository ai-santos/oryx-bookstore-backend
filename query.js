const books = require('google-books-search')

const search_results = books.search('the', function(error, results) {
  if ( ! error ) {
    return results
  } else {
    return error
  }
})

module.exports = { search_results }