import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FiDelete } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyBooksCard = ({ myBooks }) => {
  const { imageLink, rating, category, tags, bookName, authorName, id } = myBooks;
  const navigate=useNavigate()
  const handelDeleteBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to be delete this book!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log("Cencel")
      if (result.isConfirmed) {
        console.log(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your book has been deleted.",
          icon: "success",
        });
      }
    });
  }

  const handelEditBtn = (id) => {
    navigate(`/dashboard/edit-books/${id}`);
  }
  return (
    <div className="card w-80 bg-base-100 border-2 font-work-sans">
      <div className="p-5">
        <figure className="bg-[#F3F3F3] px-8 py-5 rounded-xl">
          <img className="h-[300px] w-[300px]" src={imageLink} alt="Shoes" />
        </figure>
      </div>
      <div className="card-body -mt-6">
        <div className=" ">
          {/* <h4 className="bg-[#23BE0A0D] text-[#23BE0A] py-1 px-5 rounded-full">Young Adult</h4>
                                <h4 >Identity</h4> */}
          <div className="flex items-center font-work-sans font-medium gap-5 text-sm">
            {tags.map((tag, idx) => (
              <h4
                key={idx}
                tag={tag}
                className="bg-[#23BE0A0D] text-[#23BE0A]  rounded-full py-1 px-2 "
              >
                {tag}
              </h4>
            ))}
          </div>
        </div>
        <h2 className="card-title mt-2 font-Playfai text-2xl font-bold">
          {bookName}
        </h2>
        <p className="font-medium font-work-sans text-[#131313CC]">
          By : {authorName}
        </p>
        <div className="border-t-2 border-dashed "> </div>
        <div className="card-actions justify-between text-[#131313CC]  font-medium">
          <h5 className="">{category}</h5>
          <div className="flex items-center gap-3">
            <p>{rating}</p>
            <i className="fa-regular fa-star"></i>
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <div onClick={()=>handelEditBtn(id)} className="flex gap-1 items-center hover:cursor-pointer hover:text-teal-500">
            <span>
              <FaRegEdit></FaRegEdit>
            </span>
            <p>Edit</p>
          </div>
          <div onClick={()=>handelDeleteBtn(id)} className="flex gap-1 items-center hover:cursor-pointer hover:text-red-500">
            <span>
              <FiDelete></FiDelete>
            </span>
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooksCard;
