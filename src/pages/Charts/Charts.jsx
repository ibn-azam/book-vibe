import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Charts = ({ booksPromise }) => {
  const booksDataRes = use(booksPromise);
  const booksData = booksDataRes.data;

  const booksChartData = booksData.map(bookData => ({
    id: bookData.bookId,
    name: bookData.bookName,
    rating: bookData.rating,
    pages: bookData.totalPages,
  }));

  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-2xl text-center font-bold mb-6'>Books Rating Chart</h2>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart data={booksChartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Bar dataKey='rating' fill='#a78bfa' radius={[4, 4, 0, 0]} />
          <Bar dataKey='pages' fill='#2B7FFF' radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;