import React, { useState } from "react";
import {useStore} from "../store/SnipStore";
import Content from "./Content";
import NewSnippet from "./NewSnippet";

interface Props{
    display : string;
    setDisplay : React.Dispatch<React.SetStateAction<string>>;
}
const ContentDisplay = ({display, setDisplay}:Props)=>{
    const {snipData, setSnipData} = useStore();
    //const snipData = useStore((state)=>state.snipData);
    //const editSnipData = useStore((state)=>state.setSnipData);
    if(display==="home"){
        return (
            <>
                <Content/>
            </>
        );
    }
    else if(display === "new"){
        return (
        <>
            <NewSnippet/>
        </>
        )
    }else{
        return (
            <>
                <div className="null"> null </div>
            </>
        );
    }
};

export default ContentDisplay;