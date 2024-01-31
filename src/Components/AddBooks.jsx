import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState,useEffect} from 'react';
import axios from 'axios';

function AddBooks() {
  
  const [bookRecords, setBookRecords] = useState([]);
  const [authorRecords, setAuthorRecords] = useState([]);

  const fetchAllBooks = async () => {
    try {
      const res = await axios.get("https://mockapi.io/projects/65acca18adbd5aa31bdf8da6#");
      console.log(res);
      setBookRecords(res.data.books); // Assuming the response has a 'books' property
      setAuthorRecords(res.data.authors); // Assuming the response has an 'authors' property
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []); 
  const initialValues = {
    title: '',
    language: '',
    isbn: '',
    author: {
      name: '',
      dob: '',
      bio: '',
    },
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().max(20, 'Title can be max 20 characters').required('Required'),
    language: Yup.string().max(15, 'Language can be max 15 characters').required('Required'),
    isbn: Yup.string().matches(/^\d{6}$/, 'ISBN must be exactly 10 digits').required('Required'),
    author: Yup.object().shape({
      name: Yup.string().max(10, 'Name can be max 10 characters').required('Required'),
      bio: Yup.string().max(30, 'Bio can be max 30 words').required('Required'),
      dob: Yup.date().required('Required'),
    }),
  });

  const onSubmit = (values) => {
    console.log(values);
    // const fetchAllBooks = async () => {
      try {
        const res = axios.post("https://mockapi.io/projects/65acca18adbd5aa31bdf8da6#");
        console.log(res);
        setBookRecords(res.data.books); // Assuming the response has a 'books' property
        setAuthorRecords(res.data.authors); // Assuming the response has an 'authors' property
      } catch (error) {
        console.log(error);
      }
    // };
  };

  return (
    <>
      <div className="container-fluid">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ errors, touched }) => (
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
