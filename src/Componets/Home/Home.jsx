import { useNavigate } from "react-router-dom";
import Book from "./Books/Book";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const nevigate = useNavigate()

    const handelviewListBtn = () => {
        nevigate('listedBook')
    }

    const books = useLoaderData()
    console.log(books);

    return (
        <div className="max-w-[1170px] mx-auto mt-5 max-sm:p-3">
            <div className="bg-[#1313130D] flex max-sm:flex-col-reverse gap-3 lg:justify-between p-5 lg:p-12 rounded-2xl items-center">
                <div>
                    <h3 className="font-Playfai text-3xl lg:text-6xl font-bold lg:leading-[84px] lg:max-w-[650px]">Books to freshen up your bookshelf</h3>
                    <button onClick={handelviewListBtn} className="rounded-xl p-4 bg-[#23BE0A] text-white font-bold text-xl font-work-sans mt-5">View The List</button>

                </div>

                <div>
                    <img src="./pngwing 1.png" alt="" />
                </div>
            </div>

            <div className="mt-8">

                <h3 className="text-5xl font-bold font-Playfai text-center">Books</h3>
                <div className="grid lg:grid-cols-3 gap-5 mt-8">
                    {
                        books.map((book, idx) => <Book key={idx} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
