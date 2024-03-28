import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveReadBooks } from "../../../../Utility/SaveReadBook";
import { saveWishlistBooks } from "../../../../Utility/Wishlist";
import { getReadBooks } from "../../../../Utility/SaveReadBook";
import { getWishlistBooks } from "../../../../Utility/Wishlist";

const Bookdetlais = () => {

    const data = useParams();

    const bookData = useLoaderData();

    const findBook = bookData.find(b => b.bookId === data.bookId)

    const handleReadBtn = () => {


        const storedBooksId = getReadBooks()
        // console.log(storedBooksId);
        // console.log(findBook.bookId);

        const cheakBookItem = storedBooksId.find(id => id === findBook.bookId)
        // console.log(cheakBookItem);
        // console.log(cheakBookItem);
        if (!cheakBookItem) {
            toast.success('Read Book Added Successful')
            saveReadBooks(findBook.bookId)
        }
        else {
            toast.error('Already Added Read Book List')
        }

        // for (const id of storedBooksId) {
        //     const cheakBookItem = storedBooksId.find(b => b.bookId === findBook.bookId)
        //     console.log(cheakBookItem);

        // }
    }

    const handleWishListBtn = () => {
        // saveWishlistBooks(findBook.bookId)
        // toast('Wish List Add Successful')
        const storedWishlistId = getWishlistBooks()
        const storedBooksId = getReadBooks()
        const chaekWishlist = storedWishlistId.find(id => id === findBook.bookId)
        const cheakBookItem = storedBooksId.find(id => id === findBook.bookId)
        if(!chaekWishlist && !cheakBookItem){        
            toast.success('Wishlist Added Successful') 
            saveWishlistBooks(findBook.bookId)
        }
        else if(cheakBookItem){
            toast.error('Already Read This Book')
        }
        else{
            toast.error('Already Added Wishlist') 
        }
    }

    return (
        <div className="max-w-[1170px] mx-auto my-10 max-sm:p-3">
            <div className="flex max-sm:flex-col gap-5">
                <div className="bg-[#1313130D] p-5 rounded-2xl">
                    <img src={findBook.image} alt="" />
                </div>
                <div className="max-w-[652px] ">
                    <h2 className="card-title mt-2 font-Playfai text-2xl lg:text-4xl font-bold">{findBook.bookName}</h2>
                    <p className="font-medium font-work-sans text-[#131313CC] my-3">By : {findBook.author}</p>
                    <div className="border-t-2 "> </div>
                    <h5 className="my-3 text-xl font-medium text-[#131313CC]">{findBook.category}</h5>
                    <div className="border-t-2 "> </div>
                    <p className="my-2 text-[#131313B2] font-work-sans"><span className="text-[#131313] font-bold">Review :</span> {findBook.review}</p>
                    <div className="flex items-center font-work-sans font-medium gap-5 text-sm my-2">
                        <h4 className="text-[#131313] font-bold">Tag</h4>
                        {
                            findBook.tags.map((tag,idx) => <h4 key={idx} tag={tag} className="bg-[#23BE0A0D] text-[#23BE0A]  rounded-full py-1 px-2 max-sm:text-sm ">#{tag}</h4>)
                        }
                    </div>
                    <div className="border-t-2 "> </div>

                    <div className="my-3 flex items-center gap-16">
                        <div className=" text-[#131313B2] space-y-3">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div className="space-y-3 text-[#131313] font-semibold font-work-sans">
                            <h4>{findBook.totalPages}</h4>
                            <h4>{findBook.publisher}</h4>
                            <h4>{findBook.yearOfPublishing}</h4>
                            <h4>{findBook.rating}</h4>
                        </div>
                    </div>

                    <div className="font-semibold text-lg font-work-sans flex gap-16 mt-5">
                        <button onClick={handleReadBtn} className="border-[1px] border-[#1313134D] px-7 h-12 text-[#131313] rounded-xl">Read</button>
                        <button onClick={handleWishListBtn} className="bg-[#50B1C9] text-white px-7 rounded-xl h-12">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Bookdetlais;