import React from 'react';
import books from '../../Books/books';
import useAuth from '../../hooks/useAuth';
import MyBooksCard from './MyBooksCard';

const MyBooks = () => {
    const {user}=useAuth()
    const myBooks = books.filter(my => my.email === user?.email)
    console.log(myBooks)
    return (
      <div className='grid grid-cols-3 gap-5 overflow-x-auto'>
        {myBooks.map((myBooks, idx) => (
          <MyBooksCard key={idx} myBooks={myBooks}></MyBooksCard>
        ))}
      </div>
    );
};

export default MyBooks;