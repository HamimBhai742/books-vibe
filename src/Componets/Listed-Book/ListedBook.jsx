import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ListedBook = () => {
    return (
        <div>
            <div className="max-w-[1170px] mx-auto "  >
                <h3 className="bg-[#1313130D] py-6 text-center text-[#131313] font-work-sans text-3xl font-bold rounded-2xl">Book</h3>
                

                <div className="mt-5">
                <ul className="flex gap-4 text-[#13131380] font-work-sans text-lg">
                    <li><NavLink to={'readPage'} >Read Books</NavLink></li>
                    <li><NavLink to={'wishlistBooksPage'}>Wishlist Books</NavLink></li>
                </ul>
                <div className="border-t-2 border-[#1313134D]"></div>
                <div>
                <Outlet></Outlet>
                </div>
            </div>
            </div>        
        </div>
    );
};

export default ListedBook;