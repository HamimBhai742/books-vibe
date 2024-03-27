import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { getReadBooks } from '../../../Utility/SaveReadBook';
import ReadBookPage from './ReadBookPage';

const ReadPage = () => {
    const [readBooks, setReadBooks] = useState([])

    const Books = useLoaderData()

    useEffect(() => {
        const storedBooksId = getReadBooks()
        if (Books.length > 0) {

            const saveReadBooks = []
            for (const id of storedBooksId) {
                const readBook = Books.find(book => book.bookId === id)
                if (readBook) {
                    saveReadBooks.push(readBook)
                }
            }
            setReadBooks(saveReadBooks)
            // console.log(readBooks);
            // console.log(saveReadBooks);

        }
    }, [])
    return (
        <div>
            {
                readBooks.map((readBook,idx)=><ReadBookPage key={idx} readBook={readBook}></ReadBookPage>)
            }
        </div>

    );
};

export default ReadPage;