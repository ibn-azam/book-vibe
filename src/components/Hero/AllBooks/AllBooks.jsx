import React, { use } from 'react';
import Book from './Book/Book';


const booksPromise = fetch('/booksData.json').then(res => res.json());
const AllBooks = () => {

    const books = use(booksPromise);
    
    return (
        <div className='my-12'>
            <h2 className='text-center text-3xl font-bold'>All Books</h2>

           <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto container  gap-10 my-12'>
             {
                books.map((book, ind) =><Book key={ind} book={book}></Book>)
            }
           </div>
        </div>
    );
};

export default AllBooks;