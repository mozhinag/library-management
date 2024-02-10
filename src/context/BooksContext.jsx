import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [bookRecords, setBookRecords] = useState([]);
  const [editingBook, setEditingBook] = useState(null); // State to manage the currently editing book

  // Method to initiate editing a book
  const startEditingBook = (bookId) => {
    setEditingBook(bookId);
  };
  // Method to clear the editing state
  const clearEditingBook = () => {
    setEditingBook(null);
  };

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

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ bookRecords, setBookRecords,editingBook,startEditingBook,setEditingBook,clearEditingBook }}>
      {children}
    </BooksContext.Provider>
  );
};
