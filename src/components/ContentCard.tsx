import React from "react";
import {CardData} from './CardData'

interface Props{
    data : CardData;
};

const ContentCard = ({data}:Props)=>{
    return (
        <div className=" cursor-pointer flex-[0_0_calc(100%-0.75rem)] sm:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-0.75rem)] flex-shrink-0 min-h-30 text-[#c5c5c5] px-4 py-3 content-card flex flex-col border border-[#212121] rounded-xl">
            <div className="title">
                {data.title}
            </div>
            <div className="description text-sm pt-2">
                {data.description}
            </div>
        </div>
    );
};


export default ContentCard;