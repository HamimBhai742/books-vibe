import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const API_KEY = import.meta.env.VITE_IMAGE_API_KEY;
const Hosting = `https://api.imgbb.com/1/upload?key=${API_KEY}`;
const AddComponents = () => {
  const handelBookAddBtn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const bookName = form.bookName.value;
    const category = form.category.value;
    const authorName = form.authorName.value;
    const description = form.description.value;
    const publishYear = form.publishYear.value;
    const publisher = form.publisher.value;
    const copiesInStock = form.copiesInStock.value;
    const tags = form.tags.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const isAvailable = form.isAvailable.value;
    const format = form.format.value;
    const imageLink = form.imageLink.files[0];

    const imageFile = { image: imageLink }; // Make sure this is a File object
    console.log(imageFile)
    const res = await axios.post(Hosting, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data.data.display_url);
    console.log({
      bookName,
      authorName,
      tags,
      rating,
      price,
      isAvailable,
      format,
      category,
      description,
      publishYear,
      publisher,
      copiesInStock,
      imageLink: res.data.data.display_url,
    });

    console.log(bookName);

    toast.error("Add Books Data Coomin Soon");
  };
  return (
    <section className="p-6 bg-teal-100 max-w-[1170px] mx-auto font-work-sans shadow-md rounded-lg">
      <h3 className="text-center font-bold text-3xl mb-5 text-teal-600 font-Playfai">
        Add Book
      </h3>
      <form onSubmit={handelBookAddBtn}>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="firstname" className="text-sm font-semibold">
              Author Name
            </label>
            <input
              type="text"
              name="authorName"
              placeholder="Author Name"
              className="w-full rounded-md pl-3 h-10"
            />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label htmlFor="firstname" className="text-sm font-semibold">
              Email
            </label>
            <input
              type="text"
              name="email"
              // defaultValue={email}
              placeholder="Your Email"
              className="w-full rounded-md pl-3 h-10"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="firstname" className="text-sm font-semibold">
              Book Image
            </label>
            <input
              type="file"
              name="imageLink"
              className="file-input w-full rounded-md h-10"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="firstname" className="text-sm font-semibold">
              Book Name
            </label>
            <input
              type="text"
              name="bookName"
              placeholder="Book Name"
              className="w-full rounded-md pl-3 h-10"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="firstname" className="text-sm font-semibold">
              Category
            </label>
            <div>
              <select
                name="category"
                className="px-3 bg-white w-full rounded-md h-10"
              >
                <option className="text-gray-300" disabled selected>
                  Select Your Category
                </option>
                <option value="history">History</option>
                <option value="art">Art</option>
              </select>
            </div>
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="firstname" className="text-sm font-semibold">
              Format
            </label>
            <div>
              <select
                name="format"
                className="px-3 bg-white w-full rounded-md h-10"
              >
                <option className="text-gray-300" disabled selected>
                  Select Your Format
                </option>
                <option value="Hardcover">Hard Cover</option>
                <option value="Softcopy">Soft Copy</option>
              </select>
            </div>
          </div>
          <div className="col-span-full">
            <label htmlFor="address" className="text-sm font-semibold">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Description..........."
              className="w-full rounded-md p-1 h-16"
            ></textarea>
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="city" className="text-sm font-semibold">
              PublishYear
            </label>
            <input
              type="number"
              name="publishYear"
              placeholder="PublishYear"
              className="w-full rounded-md pl-3 h-10"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="state" className="text-sm font-semibold">
              Pages
            </label>
            <input
              type="number"
              name="pages"
              placeholder="Pages"
              className="w-full rounded-md pl-3 h-10"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="zip" className="text-sm font-semibold">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-full rounded-md pl-3 h-10"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="zip" className="text-sm font-semibold">
              Publisher
            </label>
            <input
              type="text"
              name="publisher"
              placeholder="Publisher"
              className="w-full rounded-md pl-3 h-10"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="firstname" className="text-sm font-semibold">
              Language
            </label>
            <div>
              <select
                name="language"
                className="px-3 bg-white w-full rounded-md h-10"
              >
                <option className="text-gray-300" disabled selected>
                  Select Your Language
                </option>
                <option value="english">English</option>
                <option value="bengli">Bengli</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="zip" className="text-sm font-semibold">
              Rating
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Rating"
              className="w-full rounded-md pl-3 h-10"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="zip" className="text-sm font-semibold">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              placeholder="Tags"
              className="w-full rounded-md pl-3 h-10"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="zip" className="text-sm font-semibold">
              Stock
            </label>
            <input
              type="number"
              name="copiesInStock"
              placeholder="Stock"
              className="w-full rounded-md pl-3 h-10"
            />
          </div>
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="firstname" className="text-sm font-semibold">
              Is Available
            </label>
            <div>
              <select
                name="isAvailable"
                className="px-3 bg-white w-full rounded-md h-10"
              >
                <option className="text-gray-300" disabled selected>
                  Select Your Available Stock
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="col-span-full">
            <button className="btn bg-teal-500 w-full hover:bg-teal-600 font-semibold text-xl">
              Add Book
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddComponents;
