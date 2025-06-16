import React from "react";
import {CardData} from './CardData'
import { SnipType } from "../store/SnipType";
interface Props{
    data : SnipType;
};

const ContentCard = ({data}:Props)=>{
        return (
            <div 
            className=" cursor-pointer flex-[0_0_calc(100%-0.75rem)] sm:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-0.75rem)] flex-shrink-0 min-h-30 px-4 py-3 content-card flex flex-col border border-[#212121] rounded-xl hover:bg-[#20202035]">
            <div className="title  text-[#cdac28] font-semibold">
                {data.title}
            </div>
            <div className="description text-sm pt-2 text-[#9a9a9a] ">
                {data.description}
            </div>
        </div>
    );
};


export default ContentCard;