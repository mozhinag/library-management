import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [bookRecords, setBookRecords] = useState([]);

  const fetchAllBooks = async () => {
    try {
      const response = await axios.get("https://65acca18adbd5aa31bdf8da5.mockapi.io/details/details");
      if (Array.isArray(response.data)) {
        setBookRecords(response.data);
      } else {
        console.error('Books data is not an array:', response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = (id) => {
    setBookRecords(bookRecords.filter(book => book.id !== id));
    // Optionally, send a request to your backend to delete the book permanently
  };

  const editBook = (id, updatedBook) => {
    const updatedBooks = bookRecords.map(book => book.id === id ? { ...book, ...updatedBook } : book);
    setBookRecords(updatedBooks);
  };
  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ bookRecords, deleteBook, editBook }}>
      {children}
    </BooksContext.Provider>
  );
};
