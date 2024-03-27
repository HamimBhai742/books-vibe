import React, { useEffect, useState, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getWishlistBooks } from '../../../Utility/Wishlist';
import WishlistSave from './WishlistSave';
import { getReadBooks } from '../../../Utility/SaveReadBook';
import { AssetContext } from '../ListedBook';

const WishlistBooks = () => {

    const wishlist = useLoaderData()
    const [wishlists, setWishlists] = useState([])
    const wishlistShortBooks = useContext(AssetContext)
    console.log(wishlistShortBooks);

    if (wishlistShortBooks === 'Rating') {
        // console.log('sfsagfdfgg');
        const rating = wishlists.sort((a, b) => (a.rating < b.rating) ? 1 : (a.rating > b.rating) ? -1 : 0);
        // console.log(rating);
        // setRating(rating)
    }
    else if (wishlistShortBooks === 'Number of pages') {
        const numberOfPage = wishlists.sort((a, b) => (a.totalPages < b.totalPages) ? 1 : (a.totalPages > b.totalPages) ? -1 : 0);
    }
    else {
        const yearOfPublishing = wishlists.sort((a, b) => (a.yearOfPublishing < b.yearOfPublishing) ? 1 : (a.yearOfPublishing > b.yearOfPublishing) ? -1 : 0);
    }

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


    return (
        <div>
            {
                wishlists.map((wis, idx) => <WishlistSave key={idx} wis={wis}></WishlistSave>)
            }
        </div>
    );
};

export default WishlistBooks;