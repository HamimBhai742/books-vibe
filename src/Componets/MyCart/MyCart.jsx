import React from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyCart = () => {
  const bookData = JSON.parse(localStorage.getItem("bookData"));
  console.log(bookData);
  const handelDeleteBtn = (id) => {
    const existingCart = JSON.parse(localStorage.getItem("bookData")) || [];
    const updatedCart = existingCart.filter((book) => book.id !== id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to be delete this book from cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("bookData", JSON.stringify(updatedCart));
        Swal.fire({
          title: "Deleted!",
           text: "Book removed from cart successfully",
          icon: "success",
        });
            window.location.reload()
      }
    });
  };
  return (
    <div className="overflow-x-auto font-work-sans">
      <table className="table">
        {/* head */}
        <thead className="text-center">
          <tr>
            <th>Sl.</th>
            <th>Book Image</th>
            <th>Book Name</th>
            <th>Book Price</th>
            <th>Book Category</th>
            <th>Book Format</th>
            <th>Book Language</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {/* row 1 */}
          {bookData.map((b, idx) => (
            <tr>
              <th>{idx + 1}</th>
              <td>
                <img
                  className="w-16 h-16 rounded-lg"
                  src={b?.imageLink}
                  alt=""
                />
              </td>
              <td>{b?.bookName}</td>
              <td>BDT {b?.price}</td>
              <td>
                <p className="bg-green-100 px-2 py-1 rounded-full font-medium text-green-600">
                  {b?.category}
                </p>
              </td>
              <td>
                <p className="bg-teal-100 px-3 py-1 rounded-full font-medium text-teal-600">
                  {b?.format}
                </p>
              </td>
              <td>
                <p className="bg-pink-100 px-3 py-1 rounded-full font-medium text-pink-600">
                  {b?.language}
                </p>
              </td>
              <td>
                <button
                  onClick={() => handelDeleteBtn(b?.id)}
                  className="text-xl hover:text-red-600"
                >
                  <MdDelete></MdDelete>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCart;
