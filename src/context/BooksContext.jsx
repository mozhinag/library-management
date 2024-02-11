import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [bookRecords, setBookRecords] = useState([]);
  const [editingBook, setEditingBook] = useState(null); 


  const startEditingBook = (bookId) => {
    setEditingBook(bookId);
  };
  
  const clearEditingBook = () => {
    setEditingBook(null);
  };
  const deleteBook = async (bookId) => {
    try {
      
      await axios.delete(`https://65acca18adbd5aa31bdf8da5.mockapi.io/details/details/${bookId}`);
      
      const newBookRecords = bookRecords.filter(book => book.id !== bookId);
      setBookRecords(newBookRecords);
      alert('Deleted');
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
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
    <BooksContext.Provider value={{ bookRecords, setBookRecords,editingBook,startEditingBook,setEditingBook,clearEditingBook ,deleteBook}}>
      {children}
    </BooksContext.Provider>
  );
};
