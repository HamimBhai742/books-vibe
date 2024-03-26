const getReadBooks = () => {
    const storedBooks = localStorage.getItem('read-books')

    if (storedBooks) {
        return JSON.parse(storedBooks)
    }
    return []
}

const saveReadBooks = id => {
    console.log(id);
    const saveStroedReadBooks = getReadBooks();
    const Stored = saveStroedReadBooks.find(bookId => bookId === id);

    if (!Stored) {
        saveStroedReadBooks.push(id)
        localStorage.setItem('read-books',JSON.stringify(saveStroedReadBooks))
    }
}

export { saveReadBooks, getReadBooks }