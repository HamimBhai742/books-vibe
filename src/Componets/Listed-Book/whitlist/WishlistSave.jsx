

const WishlistSave = ({ wis}) => {
    const { totalPages, publisher, yearOfPublishing, tags, author, bookName, image, rating, category } = wis;
    return (
        <div>
            <div className='mt-6'>
                <div className="card lg:card-side border-2 border-[#13131326]">
                    <div className="p-5 rounded-2xl">
                        <figure className="bg-[#F3F3F3] px-8 py-5 rounded-2xl"><img className="h-[200px] w-full" src={image} alt="Shoes" /></figure>
                    </div>
                    <div className="card-body font-work-sans space-y-2">
                        <h2 className="card-title font-Playfai text-2xl font-bold">{bookName}</h2>
                        <p className="text-[#131313CC] font-medium">By : {author}</p>
                        <div className='flex gap-12'>
                            <div className='flex items-center font-work-sans font-medium gap-5'>
                                <h4 className="text-[#131313] font-bold">Tag</h4>
                                {/* <h4 className="bg-[#23BE0A0D] text-[#23BE0A] py-1 px-5 rounded-full">#Young Adult</h4>
                                <h4 >#Identity</h4> */}
                                {
                                    tags.map((tag,idx) => <h4 key={idx} tag={tag} className="bg-[#23BE0A0D] text-[#23BE0A] rounded-full py-1 px-5">#{tag}</h4>)
                                }
                            </div>
                            <div className='flex gap-3 items-center text-[#131313CC]'>
                                <i className="fa-solid fa-location-dot"></i>
                                <p>Year of Publishing: {yearOfPublishing}</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-12 text-[#13131399]'>
                                <div className='flex gap-3 items-center'>
                                    <i className="fa-solid fa-user-group"></i>
                                    <p>Publisher: {publisher}</p>
                                </div>
                                <div className='flex gap-3  items-center'>
                                    <i className="fa-regular fa-file-lines"></i>
                                    <p>Page {totalPages}</p>
                                </div>
                            </div>
                        </div>
                        <div className='border-b-2'></div>
                        <div className="card-actions gap-3">
                            <p className='bg-[#328EFF26] text-[#328EFF] rounded-3xl py-2 max-w-44 text-center'>Category: {category}</p>
                            <p className='text-[#FFAC33] bg-[#FFAC3326] rounded-3xl py-2 max-w-44 text-center'>Rating: {rating}</p>
                            <button className='bg-[#23BE0A] py-[6px] text-lg font-medium px-5 rounded-3xl text-white'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistSave;