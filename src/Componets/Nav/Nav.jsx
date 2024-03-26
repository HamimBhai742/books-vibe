import { NavLink } from "react-router-dom";

// import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div className="font-work-sans max-w-[1170px] mx-auto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex items-center text-[#131313CC]">
                            <li className="border-2 border-[#23BE0A] text-[#23BE0A] text-lg font-semibold rounded-xl"><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/listedBook'}>Listed Books</NavLink></li>
                            <li><NavLink to={'/pageToRead'}>Pages to Read</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end text-lg  font-semibold flex gap-3">
                        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
                    </div>
                </div>
            </div>
            {/* <Header></Header> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Nav;