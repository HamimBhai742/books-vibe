import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div  className="flex flex-col justify-center items-center min-h-screen gap-5 max-sm:p-3">
            <h3 className="text-7xl font-extrabold">404</h3>
            <h3 className="text-3xl font-work-sans uppercase font-bold max-sm:text-center">opps! page not found</h3>
            <p className="text-center">Sorry, the page you're lookin for doesn't exist. If you think <br /> somthing is borken, repoart a problem.</p>
            <Link to="/" className="bg-[#23BE0A] p-3 text-white font-medium rounded-xl">Go Back Home</Link>
        </div>
    );
};

export default Error;