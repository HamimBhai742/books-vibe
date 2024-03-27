import { useLoaderData } from "react-router-dom";
import Writer from "./Writer";

const Writers = () => {

    const writersData = useLoaderData()
    console.log(writersData);
    return (
        <div className="grid grid-cols-3 max-w-[1170px] mx-auto gap-5">
            {
                writersData.map((writer,idx)=><Writer key={idx} writer={writer}></Writer>)
            }
        </div>
    );
};

export default Writers;