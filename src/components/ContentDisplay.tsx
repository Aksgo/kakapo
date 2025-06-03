import React, { useState } from "react";
import {useStore} from "../store/SnipStore";


interface Props{
    display : string;
    setDisplay : React.Dispatch<React.SetStateAction<string>>;
}
const ContentDisplay = ({display, setDisplay}:Props)=>{
    const store = useStore();

    return (
    <>  

    </>);
};

export default ContentDisplay;