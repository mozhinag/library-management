import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

function Booklist() {

  const { bookRecords } = useContext(BooksContext);
  return (
    <div className="container mt-4">
      <h2>Book Records</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">ISBN</th>
            <th scope="col">Publication Date</th>
          </tr>
        </thead>
        <tbody>
          {bookRecords.map((book, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{book.title}</td>

              <td>{book.author ? book.author.name : 'N/A'}</td>
              <td>{book.isbn}</td>
              <td>{book.publicationDate || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Booklist;
