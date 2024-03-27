import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getWishlistBooks } from '../../../Utility/Wishlist';
import WishlistSave from './WishlistSave';
import { getReadBooks } from '../../../Utility/SaveReadBook';

const WishlistBooks = () => {

    const wishlist = useLoaderData()
    const [readBooks, setReadBooks] = useState([])
    const [wishlists, setWishlists] = useState([])

    const Books = useLoaderData()
    useEffect(() => {
        const storedWishlistId = getWishlistBooks()
        const saveWishist = []
        if (wishlist.length > 0) {
            for (const id of storedWishlistId) {
                const cheakWishlist = wishlist.find(w => w.bookId === id)
                console.log(cheakWishlist);
                if (cheakWishlist) {
                    saveWishist.push(cheakWishlist)
                }
            }
            setWishlists(saveWishist)
            console.log(saveWishist, storedWishlistId);
        }
    }, [])

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
            console.log(readBooks);
            console.log(saveReadBooks);

        }
    }, [])

    // const [readBooks, setReadBooks] = useState([])
    readBooks.map(mr => console.log(mr))

    return (
        <div>
            <div>
                {
                    wishlists.map((wis, idx) => <WishlistSave key={idx} wis={wis}></WishlistSave>)
                }
            </div>
            {/* <div>
                {
                    readBooks.map((read, idx) => <WishlistSave read={read} key={idx}></WishlistSave>)
                }
            </div> */}
        </div>
    );
};

export default WishlistBooks;