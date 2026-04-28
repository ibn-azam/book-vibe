import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookProvider';

const BookDetails = () => {
    const {bookId} = useParams();
    
    const {handleWishlist,handleMarkAsRead} = useContext(BookContext);
   
    
    
    const bookDetails = useLoaderData();

    const expectedBook = bookDetails.find((book)=> book.bookId === Number(bookId));

    const {bookName,author,image,rating,category,tags,yearOfPublishing,publisher,totalPages,review}=expectedBook;
    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-6">
  <figure className='w-full flex justify-center items-center bg-green-200 rounded-lg'>
    <img
      src={image}
      alt={bookName} 
      className='h-[400px] '/>
      
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>By : {author}</p>

     <p className='border-y-2 '>{category}</p>
    <div>
       <p>Review : {review}</p>
    </div>
    <div className="flex gap-3 my-5">
    {
        tags.map(tag =>
      <div className="badge bg-[#22be0a31] text-[#23BE0A] 
      text-[16px] font-medium px-4 py-3 ">{tag}</div> 
    )
    }
    </div>
    <div className=' border-t border-black my-4 pt-4'>
        <p className=' flex gap-6'><span >Number of Pages</span><span className='font-medium'>{totalPages}</span></p>
        <p className=' flex gap-6'><span>Publisher</span><span className='font-medium'>{publisher}</span></p>
        <p className=' flex gap-6'><span>Year of Publishing</span><span className='font-medium'>{yearOfPublishing}</span></p>
        <p className=' flex gap-6'><span>Rating</span><span className='font-medium'>{rating}</span></p>
    </div>
    <div className="flex gap-4">
      <button className="btn" onClick={()=> handleMarkAsRead(expectedBook)}>Mark As Read</button>
      <button className="btn btn-primary" onClick={()=>handleWishlist(expectedBook)}>Add To Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default BookDetails;