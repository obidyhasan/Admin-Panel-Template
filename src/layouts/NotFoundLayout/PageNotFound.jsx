import React from "react";
import notFound from "./../../assets/illustrations/not-found.svg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div className="font-poppins w-full min-h-screen flex gap-6 flex-col items-center justify-center p-5">
        <img src={notFound} className="max-w-sm w-full" alt="" />
        <h2 className="font-semibold text-2xl">Page Not Found</h2>
        <Link to={"/"} replace className="btn">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
