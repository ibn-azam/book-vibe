import React from 'react';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const Book = ({book}) => {

    const {bookId,bookName,author,image,rating,category,tags} = book;
    return (
       <Link to={`/bookdetails/${bookId}`} className="card bg-base-100 shadow-md border border-[#4242425d]">
  <figure className='p-6'>
    <img className='rounded-xl h-[220px] '
      src={image}
      alt={bookName} />
  </figure>
  <div className="card-body">
    <div className="card-actions justify-start">
    {
        tags.map(tag =>
      <div className="badge bg-[#22be0a31] text-[#23BE0A] 
      text-[16px] font-medium px-4 py-3 ">{tag}</div> 
    )
    }
    </div>
    <div className='mt-4'>
        <h2 className="card-title text-2xl font-bold">
      {bookName}
    </h2>
    <p className='text-lg font-medium'>By: {author}</p>
    </div>
    
    <div className='flex justify-between border-t border-dashed mt-5'>
        <p className='text-lg font-medium mt-5'>{category}</p>
        <p className='text-end text-lg font-medium mt-5'><span className='flex items-center justify-end gap-1'>{rating}
            <CiStar/></span>
        </p>
    </div>
  </div>
</Link>
    );
};

export default Book;