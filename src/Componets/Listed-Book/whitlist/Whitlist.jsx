import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getWishlistBooks } from '../../../Utility/Wishlist';
import WishlistSave from './WishlistSave';
import { getReadBooks } from '../../../Utility/SaveReadBook';

const WishlistBooks = () => {

    const wishlist = useLoaderData()
    const [wishlists, setWishlists] = useState([])

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