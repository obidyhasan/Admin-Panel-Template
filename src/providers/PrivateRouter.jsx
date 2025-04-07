import React from "react";
import useAuth from "../hooks/Authentication/useAuth";
import PageLoading from "../layouts/LoadingLayout/PageLoading";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <PageLoading></PageLoading>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} replace={true}></Navigate>;
};

export default PrivateRouter;
