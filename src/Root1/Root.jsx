import React from "react";
import { Outlet } from "react-router-dom";

const Roots = () => {
  return (
    <div className="my-8">
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
