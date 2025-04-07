import React, { useRef } from "react";
import DrawerMenuLinks from "./DrawerMenuLinks";
import { IoIosClose } from "react-icons/io";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const DrawerElement = () => {
  const drawerToggleRef = useRef(null);

  // Close the drawer programmatically
  const closeDrawer = () => {
    if (window.innerWidth < 1024) {
      drawerToggleRef.current.checked = false; // Uncheck the drawer toggle
    }
  };

  return (
    <div>
      {/* Drawer */}
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer-2"
          type="checkbox"
          className="drawer-toggle"
          ref={drawerToggleRef}
        />
        <div className="drawer-content w-full">
          {/* Page content here */}
          <div>
            <Navbar></Navbar>
            <div className="bg-blue-50 min-h-screen lg:p-4">
              <div className="bg-base-100 w-full min-h-screen lg:rounded p-4">
                <Outlet></Outlet>
              </div>
            </div>
            {/* <Footer></Footer> */}
          </div>
        </div>

        {/* Drawer Side Content */}
        <div className="drawer-side z-20 ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* Side Bar Elements */}
          <div className="flex flex-col gap-2 bg-base-100 min-h-screen">
            <div className="flex-auto">
              {/* Top Section */}
              <div className="sticky top-0 z-20 bg-base-100 w-full h-[65px] border-b border-b-base-300 flex items-center justify-between px-5 ">
                <h1 className="font-semibold text-xl">Admin Panel</h1>
                <button
                  onClick={closeDrawer}
                  className="border border-base-200 p-1.5 rounded-sm cursor-pointer lg:hidden"
                >
                  <IoIosClose className="text-2xl transform duration-300 hover:scale-110" />
                </button>
              </div>

              {/* Drawer Menu Links */}
              <DrawerMenuLinks closeDrawer={closeDrawer}></DrawerMenuLinks>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerElement;
