import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="ml-64 my-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
