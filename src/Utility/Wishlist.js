const getWishlistBooks = () => {
    const storedBooks = localStorage.getItem('wishlist-books')

    if (storedBooks) {
        return JSON.parse(storedBooks)
    }
    return []
}

const saveWishlistBooks = id => {
    console.log(id);
    const saveStroedWishListBooks = getWishlistBooks();
    const Stored = saveStroedWishListBooks.find(bookId => bookId === id);

    if (!Stored) {
        saveStroedWishListBooks.push(id)
        localStorage.setItem('wishlist-books',JSON.stringify(saveStroedWishListBooks))
    }
}

export { saveWishlistBooks, getWishlistBooks }