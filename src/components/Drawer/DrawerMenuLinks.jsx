import React from "react";
import { FiBox } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { IoBagHandleOutline, IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiMoney } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const DrawerMenuLinks = ({ closeDrawer }) => {
  const linkStyle = "border border-base-200 rounded-sm p-3";
  const activeClass = "bg-black text-white";

  return (
    <div>
      <div>
        <p className="px-5 pt-5 text-gray-400 font-semibold text-sm">
          ALL PAGES
        </p>
        <ul className="menu text-base-content min-h-full w-72 p-4 flex flex-col gap-3 text-base font-medium">
          {/* Sidebar content here */}
          {/* Dashboard */}
          <li>
            <NavLink
              to={"/"}
              onClick={closeDrawer}
              className={({ isActive }) =>
                `${linkStyle} ${isActive && activeClass}`
              }
            >
              <MdOutlineSpaceDashboard className="text-lg" />
              Dashboard
            </NavLink>
          </li>
          {/* Categories */}
          <li>
            <NavLink
              onClick={closeDrawer}
              to={"/categories"}
              className={({ isActive }) =>
                `${linkStyle} ${isActive && activeClass}`
              }
            >
              <FiBox className="text-lg" />
              Categories
            </NavLink>
          </li>
          {/* Products */}
          <li>
            <NavLink
              onClick={closeDrawer}
              to={"/products"}
              className={({ isActive }) =>
                `${linkStyle} ${isActive && activeClass}`
              }
            >
              <IoBagHandleOutline className="text-lg" />
              Products
            </NavLink>
          </li>
          {/* Orders */}
          <li>
            <NavLink
              onClick={closeDrawer}
              to={"/orders"}
              className={({ isActive }) =>
                `${linkStyle} ${isActive && activeClass}`
              }
            >
              <IoDocumentTextOutline className="text-lg" />
              Orders
            </NavLink>
          </li>
          {/* Users */}
          <li>
            <NavLink
              onClick={closeDrawer}
              to={"/users"}
              className={({ isActive }) =>
                `${linkStyle} ${isActive && activeClass}`
              }
            >
              <GoPerson className="text-lg" />
              Users
            </NavLink>
          </li>
          {/* Payments */}
          <li>
            <NavLink
              onClick={closeDrawer}
              to={"/payments"}
              className={({ isActive }) =>
                `${linkStyle} ${isActive && activeClass}`
              }
            >
              <PiMoney className="text-lg" />
              Payments
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerMenuLinks;
