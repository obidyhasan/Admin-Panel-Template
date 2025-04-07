import React from "react";
import DrawerElement from "../../components/Drawer/DrawerElement";
import useAuth from "../../hooks/Authentication/useAuth";
import PageLoading from "../LoadingLayout/PageLoading";

const MainLayout = () => {
  const { loading } = useAuth();
  if (loading) {
    return <PageLoading></PageLoading>;
  }

  return (
    <div className="font-poppins">
      <DrawerElement></DrawerElement>
    </div>
  );
};

export default MainLayout;
