import React, { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

function ViewBooks() {
  
    const { bookRecords } = useContext(BooksContext);
   

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
                                <td>{book.author ? book.author.name : 'N/A'}</td> {/* Corrected to access author's name */}
                                <td>{book.isbn}</td>
                                <td>{book.publicationDate}</td>
                                <td>
                                    <button  style={{ border: 'none', background: 'none' }}>
                                        <i className="bi bi-pencil-square fs-3" style={{ color: 'green' }}></i>
                                    </button>
                                    <button  style={{ border: 'none', background: 'none', marginLeft: '8px' }}>
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
