import React from "react";
import ContentCard from "./ContentCard";
const Content = ()=>{
    const cardData = [
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

    return (
        <>
           {<div className="flex flex-wrap gap-3 p-4">
                {cardData.map((data)=>(<ContentCard data = {data}/>))}
            </div>
           }
        </>
    );
};

export default Content;