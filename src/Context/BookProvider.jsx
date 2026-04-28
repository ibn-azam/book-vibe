import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';



export const BookContext = createContext();
const BookProvider = ({children}) => {

    const [storedBooks,setStoredBooks] = useState([]);
    const [wishlistBooks,setWishlistBooks] = useState([]);

    const handleMarkAsRead =(currentBook)=>{
        const isExisted = storedBooks.find((book)=> book.bookId === currentBook.bookId);

        if(isExisted){
            toast.warn('The Book is Already Exist');
        }else{
            setStoredBooks([...storedBooks,currentBook]);
            toast.success(`${currentBook.bookName} is added to the read list`)
        }
    };
    const handleWishlist =(currentBook)=>{

        const isExistedInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId);

        if(isExistedInReadList){
            toast.warn('This book is already in readlist');
            return;
        }

        const isExisted = wishlistBooks.find((book)=> book.bookId === currentBook.bookId);

        if(isExisted){
            toast.warn('The Book is Already Exist');
        }else{
            setWishlistBooks([...wishlistBooks,currentBook]);
            toast.success(`${currentBook.bookName} is added to the wishlist`)
        }
    };
    const data={
        storedBooks,setStoredBooks,handleMarkAsRead,
        wishlistBooks,setWishlistBooks,handleWishlist
    };
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;