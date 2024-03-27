import { NavLink } from "react-router-dom";

// import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";

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
                        <ul id="navBar" className="menu font-work-sans menu-horizontal px-1 flex items-center text-[#131313CC] gap-5 text-lg">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/listedBook'}>Listed Books</NavLink>
                            <NavLink to={'/pageToRead'}>Pages to Read</NavLink>
                        </ul>
                    </div>
                    <div className="navbar-end text-lg  font-semibold flex gap-3">
                        <button className="btn bg-[#23BE0A] text-white">Sign In</button>
                        <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
                    </div>
                </div>
            </div>
            {/* <Header></Header> */}
            <Outlet></Outlet>
            <div className="mt-16">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Nav;