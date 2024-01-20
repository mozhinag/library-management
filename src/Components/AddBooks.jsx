import React from 'react'
import './addbooks.css'
function AddBooks() {
  return (
  <>
  <h2>ADD BOOKS</h2>
  <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Publication Date</th>
            </tr>
          </thead>
          <tbody>
            {/* {bookRecords.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.publicationDate}</td>
              </tr>
            ))} */}
          </tbody>
        </table> 

  <h2>ADD AUTHORS</h2>
  <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Biography</th>
            </tr>
          </thead>
          <tbody>
            {/* {authorRecords.map((author, index) => (
              <tr key={index}>
                <td>{author.name}</td>
                <td>{author.birthDate}</td>
                <td>{author.biography}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
  </>
  )
}

export default AddBooks