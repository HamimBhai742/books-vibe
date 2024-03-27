import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { getReadBooks } from '../../../Utility/SaveReadBook';
import ReadBookPage from './ReadBookPage';
// import AssetContext from '../ListedBook'
import { AssetContext } from '../ListedBook';


const ReadPage = () => {
    const [readBooks, setReadBooks] = useState([])

    // const [rating, setRating] = useState([])
    const Books = useLoaderData()
    // console.log(selected);
    const readShortBooks = useContext(AssetContext)
    // console.log(readShortBooks);

    if (readShortBooks === 'Rating') {
        // console.log('sfsagfdfgg');
        const rating = readBooks.sort((a, b) => (a.rating < b.rating) ? 1 : (a.rating > b.rating) ? -1 : 0);
        // console.log(rating);
        // setRating(rating)
    }
    else if (readShortBooks === 'Number of pages') {
        const numberOfPage = readBooks.sort((a, b) => (a.totalPages < b.totalPages) ? 1 : (a.totalPages > b.totalPages) ? -1 : 0);
    }
    else {
        const yearOfPublishing = readBooks.sort((a, b) => (a.yearOfPublishing < b.yearOfPublishing) ? 1 : (a.yearOfPublishing > b.yearOfPublishing) ? -1 : 0);
    }

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
            console.log(saveReadBooks);

        }
    }, [])
    return (
        <div className='max-sm:p-3'>
            {
                readBooks.map((readBook, idx) => <ReadBookPage key={idx} readBook={readBook}></ReadBookPage>)
            }
        </div>

    );
};

export default ReadPage;