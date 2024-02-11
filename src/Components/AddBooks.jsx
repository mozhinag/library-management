import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BooksContext } from '../context/BooksContext';
import axios from 'axios';



function AddBooks() {
  const { bookRecords, clearEditingBook, setBookRecords } = useContext(BooksContext);
  const { bookId } = useParams();
  const navigate = useNavigate();
  
 
  const [formValues, setFormValues] = useState({
    title: '',
    language: '',
    isbn: '',
    bpd: '',
    author: { name: '', dob: '', bio: '' },
  });

  useEffect(() => {
    
    if (bookId) {
      const bookToEdit = bookRecords.find(book => book.id.toString() === bookId);
      if (bookToEdit) {
        setFormValues({
          ...bookToEdit,
          bpd: bookToEdit.bpd?.split('T')[0], 
        });
      }
    }
  }, [bookId, bookRecords]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().max(20, 'Title can be max 20 characters').required('Required'),
    language: Yup.string().max(15, 'Language can be max 15 characters').required('Required'),
    isbn: Yup.string().required('Required'),
    bpd: Yup.date().required('Required'),
    author: Yup.object().shape({
      name: Yup.string().min(10, 'Name can be minimum 10 characters').required('Required'),
      bio: Yup.string().max(30, 'Bio can be max 30 words').required('Required'),
      dob: Yup.date().required('Required'),
    }),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      let updatedBooks = [...bookRecords]; 
      
      if (bookId) {
       
        await axios.put(`https://65acca18adbd5aa31bdf8da5.mockapi.io/details/details/${bookId}`, values);
        
       
        updatedBooks = updatedBooks.map(book => book.id.toString() === bookId ? { ...book, ...values } : book);
      } else {
      
        const response = await axios.post("https://65acca18adbd5aa31bdf8da5.mockapi.io/details/details", values);
        
       
        updatedBooks.push(response.data);
      }
  
    
      setBookRecords(updatedBooks);
      
      
      alert(bookId ? 'Book updated successfully' : 'Book added successfully');
      setSubmitting(false);
      resetForm();
      clearEditingBook(); 
      navigate('/ViewBooks'); 
    } catch (error) {
      console.error('There was an error:', error);
      alert('Failed to process the book');
      setSubmitting(false);
    }
  };
  

  return (
    <>
    <div className="container-fluid">
    <Formik initialValues={formValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <div className="row justify-content-center">
            <h1 className="h3 text-center text-black fw-bold fs-1 ">Book</h1>
        

                {/* Book Title Field */}
                <div className="col-lg-5 mb-3">
                  <label className="form-label text-black fw-bold fs-2">Title of the Book</label>
                  <Field type="text" name="title" className="form-control" />
                  <ErrorMessage name="title" component="div" className="text-danger" />
                </div>

                {/* Language Field */}
                <div className="col-lg-5 mb-3">
                  <label className="form-label text-black fw-bold fs-2">Language</label>
                  <Field type="text" name="language" className="form-control" />
                  <ErrorMessage name="language" component="div" className="text-danger" />
                </div>
                {/* Book Publication Date */}
                <div className="col-lg-5 mb-3">
                  <label className="form-label text-black fw-bold fs-2">BOOK PUBLICATION DATE</label>
                  <Field type="date" name="bpd" className="form-control" />
                  <ErrorMessage name="bpd" component="div" className="text-danger" />
                </div>

                {/* ISBN Field */}
                <div className="col-lg-5 mb-3">
                  <label className="form-label text-black fw-bold fs-2">ISBN</label>
                  <Field type="text" name="isbn" className="form-control" />
                  <ErrorMessage name="isbn" component="div" className="text-danger" />
                </div>

                {/* Author Fields */}
                <div className="row justify-content-center mt-4">
                  <h2 className="h3 text-center text-black fw-bold fs-2">Author</h2>

                  {/* Author Name Field */}
                  <div className="col-lg-5 mb-3">
                    <label className="form-label text-black fw-bold fs-2">Name</label>
                    <Field type="text" name="author.name" className="form-control" />
                    <ErrorMessage name="author.name" component="div" className="text-danger" />
                  </div>

                  {/* Author DOB Field */}
                  <div className="col-lg-5 mb-3">
                    <label className="form-label text-black fw-bold fs-2">DOB</label>
                    <Field type="date" name="author.dob" className="form-control" />
                    <ErrorMessage name="author.dob" component="div" className="text-danger" />
                  </div>

                  {/* Author Bio Field */}
                  <div className="col-lg-5 mb-2">
                    <label className="form-label text-black fw-bold fs-2">Short Bio</label>
                    <Field as="textarea" name="author.bio" className="form-control" />
                    <ErrorMessage name="author.bio" component="div" className="text-danger" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-lg-5 text-center mt-4">
            <button type="submit" className="btn btn-primary px-5 py-2">Submit</button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
  </>
);

      }
export default AddBooks;
