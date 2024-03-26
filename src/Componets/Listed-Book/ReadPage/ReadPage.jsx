import React, { useEffect } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { getReadBooks } from '../../../Utility/SaveReadBook';

const ReadPage = () => {

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

            console.log(Books,saveReadBooks,storedBooksId);

        }
    }, [])
    return (
        <div>
            <div className='mt-6'>
                <div className="card lg:card-side border-2 border-[#13131326]">
                    <div className="p-5 rounded-2xl">
                        <figure className="bg-[#F3F3F3] px-8 py-5 rounded-2xl"><img className="h-[200px] w-full" src="/public/pngwing 1.png" alt="Shoes" /></figure>
                    </div>
                    <div className="card-body font-work-sans">
                        <h2 className="card-title font-Playfai">The Catcher in the Rye</h2>
                        <p>By : Awlad Hossain</p>
                        <div className='flex gap-12 '>
                            <div className='flex items-center font-work-sans font-medium gap-5'>
                                <h4>Tag</h4>
                                <h4 className="bg-[#23BE0A0D] text-[#23BE0A] py-1 px-5 rounded-full">#Young Adult</h4>
                                <h4 className="bg-[#23BE0A0D] text-[#23BE0A] rounded-full py-1 px-5">#Identity</h4>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <i className="fa-solid fa-location-dot"></i>
                                <p>Year of Publishing: 1924</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-12'>
                                <div className='flex gap-3 items-center'>
                                    <i className="fa-solid fa-user-group"></i>
                                    <p>Publisher: Scribner</p>
                                </div>
                                <div className='flex gap-3  items-center'>
                                    <i className="fa-regular fa-file-lines"></i>
                                    <p>Page 192</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-b-2 my-3'></div>
                        <div className="card-actions gap-3">
                            <p className='bg-[#328EFF26] text-[#328EFF] rounded-3xl py-2 max-w-44 text-center'>Category: Classic</p>
                            <p className='text-[#FFAC33] bg-[#FFAC3326] rounded-3xl py-2 max-w-44 text-center'>Rating: 4.5</p>
                            <button className='bg-[#23BE0A] py-2 text-lg font-medium px-5 rounded-3xl text-white'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ReadPage;