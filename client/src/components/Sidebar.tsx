import React, {useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineNotes } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import NewSnippet from "./NewSnippet";
import api from "../api";

const Sidebar = ()=>{
    const [display, setDisplay] = useState<string>("home");
    const handleNew = ()=>{
        
    }

    const logoutUser = async () => {
        await api.post("http://127.0.0.1:5000/logout");
        window.location.href = "/";
    };
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
            <div className="snip-add flex gap-2 bg-[#1c1c1c] items-center rounded-2xl hover:bg-[#2b2b2b] p-4"
            onClick = {logoutUser}> 
            <CiLogout/>Logout
            </div>
        </>
    )
};

export default Sidebar;