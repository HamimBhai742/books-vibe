import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaSellsy } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="font-work-sans flex gap-5 items-center">
      <div className="border-2 px-5 py-3 border-teal-400 rounded-lg">
        <h3 className="flex gap-3 items-center font-bold">
          <span className="text-2xl">
            <IoBookSharp></IoBookSharp>
          </span>{" "}
          Total Books
        </h3>
        <p className="text-center font-medium">434</p>
      </div>
      <div className="border-2 px-5 py-3 border-teal-400 rounded-lg">
        <h3 className="flex gap-3 items-center font-bold">
          <span className="text-2xl">
            <FaUsers></FaUsers>
          </span>{" "}
          Total Users
        </h3>
        <p className="text-center font-medium">345</p>
      </div>
      <div className="border-2 px-5 py-3 border-teal-400 rounded-lg">
        <h3 className="flex gap-3 items-center font-bold">
          <span className="text-2xl">
            <FaSellsy></FaSellsy>
          </span>{" "}
          Total Sell
        </h3>
        <p className="text-center font-medium">3458</p>
      </div>
      <div className="border-2 px-5 py-3 border-teal-400 rounded-lg">
        <h3 className="flex gap-3 items-center font-bold">
          <span>
            <img
              className="w-6 h-6"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nNo15YOolu68AFKR-bY8YD36DUKTFX1kgw&s"
              alt=""
            />
          </span>
          Total Revenue
        </h3>
        <p className="text-center font-medium">34565</p>
      </div>
    </div>
  );
};

export default Dashboard;
