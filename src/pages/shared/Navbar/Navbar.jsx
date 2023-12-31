import { Link, NavLink } from "react-router-dom";
import userDefaultPic from "../../../assets/user.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="navUl menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="navUl menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 h-10 rounded-full border-2 border-[#403F3F]">
          <img
            className="w-full h-full rounded-[38%]"
            src={userDefaultPic}
            alt="Image of user"
          />
        </div>
        <div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="text-white text-xl font-semibold py-3 px-11 bg-[#403F3F] normal-case ml-2"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/login"
              className="text-white text-xl font-semibold py-3 px-11 bg-[#403F3F] normal-case ml-2"
            >
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
