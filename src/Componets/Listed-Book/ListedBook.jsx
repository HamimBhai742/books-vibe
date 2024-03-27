import { useState, createContext } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ReadPage from "./ReadPage/ReadPage";
export   const AssetContext = createContext(null)

const ListedBook = () => {
    const [selected, setSlected] = useState()
    const handleBtn = (e) => {
        setSlected(e.target.value);
        console.log(selected);
    }

  
    return (
        <div>
            <div className="max-w-[1170px] mx-auto "  >
                <h3 className="bg-[#1313130D] py-6 text-center text-[#131313] font-work-sans text-3xl font-bold rounded-2xl">Book</h3>
                <div className="my-5 flex justify-center">
                    <select value={selected} onChange={handleBtn} className=" font-work-sans select border-none text-white select-bordered w-full max-w-[200px] font-semibold text-lg bg-[#23BE0A]">
                        <option disabled selected>Sort By</option>
                        <option className="text-[#131313CC] bg-[#1313130D]"><button onClick={() => handleBtn('rating')}>Rating</button></option>
                        <option className="text-[#131313CC] bg-[#1313130D]">Number of pages</option>
                        <option className="text-[#131313CC] bg-[#1313130D]">Publisher year</option>
                    </select>
                </div>
                {/* <h3>{selected}</h3> */}
                <div className="mt-5">
                    <ul className="flex gap-4 text-[#13131380] font-work-sans text-lg">
                        <li><NavLink to={'readPage'} >Read Books</NavLink></li>
                        <li><NavLink to={'wishlistBooksPage'}>Wishlist Books</NavLink></li>
                    </ul>
                    <div className="border-t-2 border-[#1313134D]"></div>
                    <div>
                        <AssetContext.Provider value={selected}>
                            <Outlet></Outlet>
                        </AssetContext.Provider>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ListedBook;