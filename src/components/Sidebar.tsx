import React, {useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Snippet from "./Snippet";
const Sidebar = ()=>{
    const [snip, editSnip] = useState<boolean>(false);
    return (
        <>
        <div className="home-content snip-add flex gap-2 bg-[#1c1c1c] items-center rounded-2xl hover:bg-[#2b2b2b] p-4">Home</div>
        {
            snip?(
                <div className="snip-write"><Snippet/></div>
            ):(
                <div className="snip-add flex gap-2 bg-[#1c1c1c] items-center rounded-2xl hover:bg-[#2b2b2b] p-4"> 
                <IoIosAddCircleOutline/>Add
                </div>
            )
        }
        </>
    )
};

export default Sidebar;