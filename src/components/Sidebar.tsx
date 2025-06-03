import React, {useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineNotes } from "react-icons/md";
import Snippet from "./Snippet";
const Sidebar = ()=>{
    const [display, setDisplay] = useState<string>("home");
    const handleNew = ()=>{
        
    }
    return (
        <>
            <div className="home-content snip-add flex gap-2 bg-[#99731a] items-center rounded-2xl hover:bg-[#b3852a] p-4">Home</div>

            <div className="snip-add flex gap-2 bg-[#1c1c1c] items-center rounded-2xl hover:bg-[#2b2b2b] p-4"
            onClick={handleNew}> 
            <IoIosAddCircleOutline/>New
            </div>

            <div className="snip-add flex gap-2 bg-[#1c1c1c] items-center rounded-2xl hover:bg-[#2b2b2b] p-4"> 
            <CiFileOn/>Files
            </div>

            <div className="snip-add flex gap-2 bg-[#1c1c1c] items-center rounded-2xl hover:bg-[#2b2b2b] p-4"> 
            <MdOutlineNotes/>Notes
            </div>
        </>
    )
};

export default Sidebar;