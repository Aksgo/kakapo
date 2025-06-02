import React from "react";

interface Data{
    id : number;
    title : string;
    description : string;
};

interface Props{
    data : Data;
};

const ContentCard = ({data}:Props)=>{
    return (
        <div className=" text-[#c5c5c5] px-4 py-3 w-1/3 content-card flex flex-col border border-[#212121] rounded-xl">
            <div className="title">
                {data.title}
            </div>
            <div className="description">
                {data.description}
            </div>
        </div>
    );
};


export default ContentCard;