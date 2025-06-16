import React, { useEffect, useState } from 'react';
import Folder from "../components/Folder"
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';
import "./App.css";
import ContentDisplay from '../components/ContentDisplay';
import api from '../api';
function App() {  
    const [display, setDisplay] = useState<string>(
      ()=>{return sessionStorage.getItem("dashboard-display") || "home";}
    );
  useEffect(()=>{
    sessionStorage.setItem("dashboard-display", display);

  }, [display]);
  useEffect(() => {
          const fetchUser = async () => {
              try {
                  const response = await api.get("http://127.0.0.1:5000/@me");
              } catch (e) {
                  console.log("Unauthorized");
                  window.location.href="/";
              }
          }
          fetchUser();
      }, []);
  return (
    <div className="App">
      <header className="App-header backdrop-blur-md fixed w-full top-0 z-50 text-center rubik-f2 p-4 font-mono text-yellow-500 text-4xl">
        Kakapo
      </header>
      {/* <div className=" text-center p-3 text-xl text-gray-300 raleway-f1 bg-[#292722]">
        <span className="relative z-10">Create. Manage. Share.</span>
      </div> */}
      <div className="main flex text-white">
        <div className="sidebar pt-24 w-1/4 flex flex-col px-3 gap-2 text-gray-300">
          <Sidebar display = {display} setDisplay = {setDisplay}/>
        </div>
        <div className="pt-20 content w-full relative">
          <div
            style={{
            position: "fixed",
            top: "-20%",
            left: "60%",
            width: "1200px",
            height: "800px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(205, 169, 63, 0.1) 1%, rgba(224, 191, 70, 0.14) 1%, transparent 80%)",
            filter: "blur(150px)",
            pointerEvents: "none",
            zIndex: 1}}>
          </div>
          <ContentDisplay display = {display} setDisplay = {setDisplay}/>
        </div>
      </div>
    </div>
  );
}

export default App;
