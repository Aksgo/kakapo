import React, { useState } from "react";
import { CardData } from "./CardData";
import api from "../api";
type formInput = {
    title:string;
    description : string;
};

const NewSnippet = ()=>{

    const [formData, setFormData]  = useState<formInput>({title:"", description : ""});

    
    const handleNewSnippet = async (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(formData.title==="" ||  formData.description===""){
            alert("Empty");
            return;
        }
        try{
            const reponse = await api.post("http://127.0.0.1:5000/create-snippet",{
            title : formData.title,
            description : formData.description
        });
    }catch(error){
        alert("Server Error");
    }
    setFormData({title:"", description:""});
    };
    
    return (
        <>
            <form className="w-2/3"
            onSubmit={(e)=>{handleNewSnippet(e)}}>
                <div className="id-display text-yellow-600 font-semibold m-4">Create Snip :</div>
                <div className="text-gray-300 flex flex-col gap-10 mx-4 mt-4">
                    <input type="text" 
                    className="title bg-[#212121] p-2 rounded-lg outline-none focus:ring-2 focus:ring-yellow-500" 
                    placeholder="Enter title (at most 100 characters)"
                    value={formData.title}
                    onChange={(e)=>setFormData({...formData, title: e.target.value})}/>
                    <textarea
                    className="description bg-[#212121] p-2 rounded-lg outline-none focus:ring-2 focus:ring-yellow-500" 
                    placeholder="Enter description (at most 1500 characters)"
                    value={formData.description}
                    rows={5}
                    onChange={(e)=>setFormData({...formData, description: e.target.value})}/>
                </div>
                <button type="submit"
                 className="btn-submit text-white bg-[#31250f] rounded-lg mt-3 mx-4 p-3"> Create </button>
            </form>
        </>
    );
};


export default NewSnippet