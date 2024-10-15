import { NavLink } from "react-router-dom";


const Book = ({ book }) => {

    const { bookName, authorName, imageLink, category, rating, id, tags } =
      book;
    console.log(book);
    return (
      <div>
        <NavLink to={`/book/${id}`}>
          <div>
            <div className="card w-96 bg-base-100 border-2">
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
                <div className="card-actions justify-between text-[#131313CC] font-work-sans font-medium">
                  <h5 className="">{category}</h5>
                  <div className="flex items-center gap-3">
                    <p>{rating}</p>
                    <i className="fa-regular fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    );
};

export default Book;