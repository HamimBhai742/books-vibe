import { useState, useEffect } from "react";
import { getReadBooks } from "../../Utility/SaveReadBook";
import { useLoaderData } from "react-router-dom";
import Pagetoredg from "./PageToreadg";


const PageToRead = () => {
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

    readBooks.map(m => console.log(m))


    return (
        <div>
            {/* {
                readBooks.map(m => <Pagetoredg></Pagetoredg>)
            } */}
            <h3>fsdgf</h3>
        </div>
    );
};

export default PageToRead;