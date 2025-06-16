import React, { useEffect, useState } from "react";
import ContentCard from "./ContentCard";
import { CardData } from "./CardData";
import api from "../api";
import { SnipType } from "../store/SnipType";

const Content = ()=>{    
    const [homeData, setHomeData] =  useState<SnipType[]|null>(null);
    useEffect(()=>{
    const fetchSnippet = async ()=>{
        try{
        const response = await api.get("http://127.0.0.1:5000/fetch-snippet");
        setHomeData(response.data);
        }catch(e){
        }
    };
    fetchSnippet();
    },[]);
    if(homeData==null){
        return (<><div className="text-white text-4xl w-full text-center my-20">Loading...</div></>)
    }
    return (
        <>
           {<div className="flex gap-3 justify-center flex-wrap p-4">
                {homeData.map((data)=>(<ContentCard data = {data}/>)
                )}
            </div>
           }
        </>
    );
};

export default Content;

 /*const sampleData : CardData[] = [
            {
                id: 1,
                title: "HTML Basics",
                description: "Learn the basic structure of HTML documents and common tags.",
            },
            {
                id: 2,
                title: "CSS Flexbox",
                description: "Understand how to use Flexbox for responsive layouts.",
            },
            {
                id: 3,
                title: "JavaScript Array Methods",
                description: "Explore useful array methods like map, filter, and reduce.",
            },
            {
                id: 4,
                title: "React Hooks",
                description: "Get started with React Hooks like useState and useEffect.",
            },
            {
                id: 5,
                title: "Tailwind CSS",
                description: "Learn how to use utility classes with Tailwind CSS for fast styling.",
            }
        ];
        localStorage.setItem("sampleData", JSON.stringify(sampleData));
        let storeData = localStorage.getItem("sampleData");
        let cardData :CardData[] = [];
        if(storeData){
            cardData = JSON.parse(storeData);
            console.log(cardData);
        }*/