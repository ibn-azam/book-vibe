import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const Charts = ({booksPromise}) => {
     
    const booksDataRes = use(booksPromise);
    const booksData = booksDataRes.data;

    const booksChartData = booksData.map(bookData =>{
        const book ={
            id: bookData.bookId,
            name: bookData.bookName,
            rating : bookData.rating
        }
        return book;
    })
    return (
        <div className='container mx-auto flex justify-center items-center my-10 bg-gray-100 py-10'>
            <BarChart width={500} height={400} data={booksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="rating" fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default Charts;