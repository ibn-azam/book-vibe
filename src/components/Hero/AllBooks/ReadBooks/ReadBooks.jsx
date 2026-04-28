import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../../../Context/BookProvider';
import ReadBooksCard from './ReadBooksCard';

const ReadBooks = ({ sortingType }) => {
  const { storedBooks } = useContext(BookContext);
  const [filteredReadList, setFilteredReadList] = useState(storedBooks);

  useEffect(() => {
    if (sortingType === 'pages') {
      const sortedData = [...storedBooks].sort((a, b) => a.totalPages - b.totalPages);
      setFilteredReadList(sortedData);
    } else if (sortingType === 'ratings') {
      const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
      setFilteredReadList(sortedData);
    } else {
      setFilteredReadList(storedBooks);
    }
  }, [sortingType, storedBooks]);

  if (filteredReadList.length === 0) {
    return (
      <div className='h-[50vh] bg-gray-100 flex justify-center items-center'>
        <h2 className='text-center text-3xl font-semibold'>No read list found</h2>
      </div>
    );
  }

  return (
    <div className='container mx-auto'>
      {filteredReadList.map((book) => (
        <ReadBooksCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default ReadBooks;