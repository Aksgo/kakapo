import React, { useEffect, useState } from 'react';
import Folder from "../components/Folder"
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import "./App.css";
import ContentDisplay from '../components/ContentDisplay';
function App() {  
    const [display, setDisplay] = useState<string>("new");
    // useEffect(()=>{
    //   fetch("/dashboard").then(
    //     res => res.json()
    //   ).then(
    //     data => {
    //       console.log(data);
    //     }
    //   )
    // },[]);

  return (
    <div className="App">
      <header className="App-header text-center p-6 bg-[#99731a]  font-mono text-gray-100 text-2xl">
        Kakapo
      </header>
      {/* <div className=" text-center p-3 text-xl text-gray-300 raleway-f1 bg-[#292722]">
        <span className="relative z-10">Create. Manage. Share.</span>
      </div> */}
      <div className="main flex h-screen text-white">
        <div className="sidebar border-r-1 border-gray-600 w-1/4 flex flex-col pt-5 px-3 gap-2 text-gray-300">
          <Sidebar/>
        </div>
        <div className="content relative">
            <div
            style={{
            position: "fixed",
            top: "70%",
            left: "70%",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(205, 169, 63, 0.1) 1%, rgba(224, 191, 70, 0.14) 1%, transparent 80%)",
            filter: "blur(150px)",
            pointerEvents: "none",
            zIndex: 1
          }}
          ></div>
          <ContentDisplay display = {display} setDisplay = {setDisplay}/>
        </div>
      </div>
    </div>
  );
}

export default App;
