import React, { useState } from "react";
import { CardData } from "./CardData";

interface Props{
    snipData: CardData[];
    setSnipData :()=>void;
};

type formInput = {
    title:string;
    description : string;
};

const NewSnippet = ({snipData, setSnipData}:Props)=>{

    const snipID= Math.floor(Math.random()*10000);
    const [formData, setFormData]  = useState<formInput | null>({title:"", description : ""});
    console.log(snipID);

    const handleInputChange = (e:React.FormEvent<HTMLFormElement>)=>{
        // const [key, value] = e.target;
        // if(value){
        //     setFormData((st)=>({...st , [key]:value }));
        // }
    };
    const handleNewSnippet = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log();

    };
    
    return (
        <>
            <form className=""
            onSubmit={(e)=>{handleNewSnippet(e)}}>
                <div className="id-display text-yellow-600 font-semibold m-4">Snippet ID : {snipID}</div>
                <div className="text-gray-300 flex gap-10 mx-4 mt-4">
                    <input type="text" 
                    className="title bg-[#212121] p-2 rounded-sm" placeholder="Enter title"/>
                    <input type="text" className="description bg-[#212121] p-2 rounded-sm" placeholder="Enter description" />
                </div>
                <button className="btn-submit text-white bg-[#31250f] rounded-lg mt-3 mx-4 p-3"> Create </button>
            </form>
        </>
    );
};


export default NewSnippet