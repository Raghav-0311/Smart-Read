import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-[#D52D5C] text-3xl my-4'>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col md:flex-row gap-12 justify-between border-2 border-[#D52D5C] rounded-xl w-fit p-4'>
          <div className='flex flex-col md:w-[50%]'>

          <div className='my-4'>
            <span className='text-xl mr-4 text-[#D52D5C]'>Id</span>
            <span>{book._id}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-[#D52D5C]'>Title</span>
            <span>{book.title}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-[#D52D5C]'>Author</span>
            <span>{book.author}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-[#D52D5C]'>Publish Year</span>
            <span>{book.publishYear}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-[#D52D5C]'>Exert</span>
            <span>{book.bookExert}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-[#D52D5C]'>Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>

          <div className='my-4'>
            <span className='text-xl mr-4 text-[#D52D5C]'>Last Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
        <img src={book.coverImage} alt={book.title} className='w-80 border rounded-md border-[#D52D5C]'/>
          </div>
      )}
    </div>
  )
}

export default ShowBook
