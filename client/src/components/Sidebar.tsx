import React, {useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiFileOn } from "react-icons/ci";
import { MdOutlineNotes } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import NewSnippet from "./NewSnippet";
import api from "../api";

interface Props{
    display:string;
    setDisplay:React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar = ({display, setDisplay}:Props)=>{

     const logoutUser = async () => {
        await api.post("http://127.0.0.1:5000/logout");
        window.location.href = "/";
    };

    const sidebarItems = [
    { label: 'Home', icon: <FiHome />, key: 'home', onClick: () => setDisplay("home")},
    { label: 'New', icon: <IoIosAddCircleOutline />, key: 'new', onClick: () => setDisplay("new")},
    { label: 'Files', icon: <CiFileOn />, key: 'files', onClick: () => setDisplay("files") },
    { label: 'Notes', icon: <MdOutlineNotes />, key: 'notes', onClick: () => setDisplay("notes") },
    { label: 'Logout', icon: <CiLogout />, key: 'logout', onClick: logoutUser },
    ];
   
    return (
        <>
            {
                sidebarItems.map((item)=>{
                    return (
                       <div
                        key={item.key}
                        onClick={item.onClick}
                        className={`flex gap-2 items-center rounded-2xl p-4 cursor-pointer ${
                             item.key=="logout"?'bg-[#4f4f4f] text-white'   
                            :display === item.key ? 'bg-[#cdb331] text-black' : 'bg-[#1c1c1c] hover:bg-[#2b2b2b]'
                            }`}
                            >
                            {item.icon}
                            <span>{item.label}</span>
                        </div>
                    )
                })
            }
        </>
    )
};

export default Sidebar;