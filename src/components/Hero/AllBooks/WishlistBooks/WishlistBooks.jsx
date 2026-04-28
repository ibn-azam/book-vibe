import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../../../Context/BookProvider';
import WishlistBookCard from './WishlistBookCard';


const ReadBooks = ({sortingType}) => {
    const {wishlistBooks} = useContext(BookContext);
     const [filteredReadList, setFilteredReadList] = useState(wishlistBooks);
    
      useEffect(() => {
        if (sortingType === 'pages') {
          const sortedData = [...wishlistBooks].sort((a, b) => a.totalPages - b.totalPages);
          setFilteredReadList(sortedData);
        } else if (sortingType === 'ratings') {
          const sortedData = [...wishlistBooks].sort((a, b) => a.rating - b.rating);
          setFilteredReadList(sortedData);
        } else {
          setFilteredReadList(wishlistBooks);
        }
      }, [sortingType, wishlistBooks]);


    if(filteredReadList.length === 0){
        return(
            <div className='h-[50vh] bg-gray-100 flex justify-center items-center'>
                <h2 className='text-center text-3xl font-semibold'>No wishlist found</h2>
            </div>
        )
    }
    return (
        <div className='container mx-auto grid grid-cols-1 gap-5'>
            {
              filteredReadList.map((book,ind) =><WishlistBookCard ind={ind} book={book}></WishlistBookCard>)  
            }
        </div>
    );
};

export default ReadBooks;