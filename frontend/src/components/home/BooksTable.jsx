import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-[#D52D5C] rounded-md bg-[#D52D5C]'>No</th>
              <th className='border border-[#D52D5C] rounded-md bg-[#D52D5C]'>Title</th>
              <th className='border border-[#D52D5C] rounded-md max-md:hidden bg-[#D52D5C]'>Author</th>
              <th className='border border-[#D52D5C] rounded-md max-md:hidden bg-[#D52D5C]'>Publish Year</th>
              <th className='border border-[#D52D5C] rounded-md bg-[#D52D5C]'>Operations</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className='h-8'>
                <td className='border border-[#D52D5C] rounded-md text-center'>
                  {index + 1}
                </td>

                <td className='border border-[#D52D5C] rounded-md text-center'>
                  {book.title}
                </td>

                <td className='border border-[#D52D5C] rounded-md text-center max-md:hidden'>
                  {book.author}
                </td>

                <td className='border border-[#D52D5C] rounded-md text-center max-md:hidden'>
                  {book.publishYear}
                </td>

                <td className='border border-[#D52D5C] rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className='text-2xl text-green-300' />
                    </Link>

                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-300' />
                    </Link>

                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-300' />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default BooksTable
