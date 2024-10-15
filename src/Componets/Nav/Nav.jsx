import { Link, NavLink } from "react-router-dom";

// import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import useAuth from "../../hooks/useAuth";

const Nav = () => {
  const { user, logOut } = useAuth();
  console.log(user)
  return (
    <div>
      <div className="font-work-sans max-w-[1170px] mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#131313CC]"
              >
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
                <NavLink to={"/writers"}>Writers</NavLink>
                <NavLink to={"/about"}>About</NavLink>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl lg:text-3xl font-bold max-sm:-ml-6">
              Book Vibe
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul
              id="navBar"
              className="menu font-work-sans menu-horizontal px-1 flex items-center text-[#131313CC] gap-5 text-lg"
            >
              <NavLink to={"/"}>Home</NavLink>
              <Link to={"/dashboard"}>Dashboard</Link>
              <NavLink to={"/writers"}>Writers</NavLink>
              <NavLink to={"/about"}>About</NavLink>
            </ul>
          </div>
          {user ? (
            <div className="dropdown dropdown-end mx-24">
              <div
                tabIndex={0}
                className="rounded-full avatar"
              >
                <div className="w-12 rounded-full">
                  <img
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-24 p-2 shadow-xl"
              >
                <li>
                  <a
                    onClick={() => {
                      logOut()
                    }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="navbar-end text-lg  font-semibold flex gap-3">
              <Link to="/sign-in" className="btn bg-[#23BE0A] text-white">
                Sign In
              </Link>
              <Link to="/sign-up" className="btn bg-[#59C6D2] text-white">
                Sign Up
              </Link>
            </div>
          )}
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
