import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import books from "../../../../Books/books";

const Bookdetlais = () => {
  const data = useParams();
  const bookData = books.find((b) => b.id == data.bookId);
  console.log(bookData);
  const handelBuyNowBtn = () => {
    alert("This feture coming soon");
  };

  const handelAddToCartBtn = (id) => {
    const existingCart = JSON.parse(localStorage.getItem("bookData")) || [];
    existingCart.push(bookData);
    localStorage.setItem("bookData", JSON.stringify(existingCart));
    toast.success("Book added to cart successfully");
  };

  return (
    <div className="max-w-[1170px] mx-auto my-10 max-sm:p-3">
      <div className="flex max-sm:flex-col gap-5">
        <div className="bg-[#1313130D] p-5 rounded-2xl">
          <img
            className="w-[550px] h-[550px]"
            src={bookData?.imageLink}
            alt=""
          />
        </div>
        <div className="max-w-[652px] ">
          <h2 className="card-title mt-2 font-Playfai text-2xl lg:text-4xl font-bold">
            {bookData?.bookName}
          </h2>
          <p className="font-medium font-work-sans text-[#131313CC] my-3">
            By : {bookData?.authorName}
          </p>
          <div className="border-t-2 "> </div>
          <h5 className="my-3 text-xl font-medium text-[#131313CC]">
            {bookData?.category}
          </h5>
          <div className="border-t-2 "> </div>
          <p className="my-2 text-[#131313B2] font-work-sans">
            <span className="text-[#131313] font-bold">Review :</span>{" "}
            {bookData?.description}
          </p>
          <div className="flex items-center font-work-sans font-medium gap-5 text-sm my-2">
            <h4 className="text-[#131313] font-bold">Tag</h4>
            {bookData?.tags.map((tag, idx) => (
              <h4
                key={idx}
                tag={tag}
                className="bg-[#23BE0A0D] text-[#23BE0A]  rounded-full py-1 px-2 max-sm:text-sm "
              >
                #{tag}
              </h4>
            ))}
          </div>
          <div className="border-t-2 "> </div>

          <div className="my-3 flex items-center gap-16">
            <div className=" text-[#131313B2] space-y-3">
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Language:</p>
              <p>Rating:</p>
              <p>Format:</p>
              <p>Stock:</p>
              <p>Price:</p>
            </div>
            <div className="space-y-3 text-[#131313] font-semibold font-work-sans">
              <h4>{bookData?.pages}</h4>
              <h4>{bookData?.publisher}</h4>
              <h4>{bookData?.publishYear}</h4>
              <h4>{bookData?.language}</h4>
              <h4>{bookData?.rating}</h4>
              <h4>{bookData?.format}</h4>
              <h4>{bookData?.copiesInStock}</h4>
              <h4>{bookData?.price} Taka</h4>
            </div>
          </div>

          <div className="font-semibold text-lg font-work-sans flex justify-between mt-5">
            <button
              disabled={!bookData?.isAvailable}
              onClick={() => handelBuyNowBtn(bookData?.id)}
              className="border-[1px] border-[#1313134D] h-12 w-[110px] text-[#131313] rounded-xl"
            >
              Buy Now
            </button>
            <button
              disabled={!bookData?.isAvailable}
              onClick={() => handelAddToCartBtn(bookData?.id)}
              className="bg-[#50B1C9] text-white w-[140px] rounded-xl h-12"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Bookdetlais;
