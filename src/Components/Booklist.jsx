import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Booklist() {
  const [bookRecords, setBookRecords] = useState([]);

  const fetchAllBooks = async () => {
    try {
      const response = await axios.get("https://65acca18adbd5aa31bdf8da5.mockapi.io/details/details");
      console.log(response.data);
      if (response.data && Array.isArray(response.data.books)) {
        setBookRecords(response.data.books);
      } else {
        console.error('Books data is not an array:', response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

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
