import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [bookExert, setBookExert] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setCoverImage(response.data.coverImage);
        setBookExert(response.data.bookExert);

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
      coverImage,
      bookExert,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Updated Successfully ✅', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please chech console');
        enqueueSnackbar('Something Went Wrong! Book cannot be updated ❌', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4 text-[#D52D5C]'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-[#D52D5C] rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-2'>
          <label className='text-xl mr-4 text-[#D52D5C]'>Title</label>
          <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-[#D52D5C] rounded-xl px-4 py-2 w-full text-black' 
          />
        </div>

        <div className='my-2'>
          <label className='text-xl mr-4 text-[#D52D5C]'>Author</label>
          <input 
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-[#D52D5C] rounded-xl px-4 py-2 w-full text-black' 
          />
        </div>

        <div className='my-2'>
          <label className='text-xl mr-4 text-[#D52D5C]'>Publish Year</label>
          <input 
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-[#D52D5C] rounded-xl px-4 py-2 w-full text-black' 
          />
        </div>

        <div className='my-2'>
          <label className='text-xl mr-4 text-[#D52D5C]'>Cover Image URL</label>
          <input 
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            className='border-2 border-[#D52D5C] rounded-xl px-4 py-2 w-full text-black' 
          />
        </div>

        <div className='my-2'>
          <label className='text-xl mr-4 text-[#D52D5C]'>Exert</label>
          <textarea 
            cols="30" 
            rows="10"
            value={bookExert}
            onChange={(e) => setBookExert(e.target.value)}
            className='border-2 border-[#D52D5C] rounded-xl px-4 py-2 w-full text-black h-40 resize-none' 
          />
        </div>

        <button
          className='p-2 bg-[#D52D5C] m-8 rounded-xl'
          onClick={handleEditBook}
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBook
