import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/Authentication/useAuth";

const Navbar = () => {
  const { handelFirebaseLogout } = useAuth();

  return (
    <div className="top-0 sticky bg-base-100 z-10 font-dm border-b border-base-300">
      <div className="navbar px-5">
        <div className="navbar-start">
          <div
            className="lg:hidden flex
             items-center gap-3"
          >
            <div>
              <label htmlFor="my-drawer-2" className="border-none btn text-xl">
                <HiMenuAlt2 />
              </label>
            </div>
            <Link to={"/"} className="text-xl">
              <h1 className="font-semibold text-xl">Admin Panel</h1>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <button className="btn" onClick={() => handelFirebaseLogout()}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
