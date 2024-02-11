import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';
import { useNavigate } from 'react-router-dom';

function ViewBooks() {
  const { bookRecords, startEditingBook } = useContext(BooksContext);
  const navigate = useNavigate();

  const handleEditClick = (bookId) => {
    startEditingBook(bookId);
    navigate(`/AddBooks/${bookId}`); // Ensure you have a route defined for this path in your App component
  };

  return (
    <div>
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookRecords.map((book, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{book.title}</td>
                <td>{book.author ? book.author.name : 'N/A'}</td>
                <td>{book.isbn}</td>
                <td>{book.bpd ?book.bpd:'N/A'}</td>
                <td>
                  <button style={{ border: 'none', background: 'none' }} onClick={() => handleEditClick(book.id)}>
                    <i className="bi bi-pencil-square fs-3" style={{ color: 'green' }}></i>
                  </button>
                  <button style={{ border: 'none', background: 'none', marginLeft: '8px' }}>
                    <i className="bi bi-trash3 fs-3" style={{ color: 'red' }}></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewBooks;
