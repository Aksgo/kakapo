import React, { useState } from 'react';
import Folder from "./components/Folder"
import Sidebar from './components/Sidebar';
import folderData from "./data/files.json";
import Content from './components/Content';
import "./App.css";
function App() {

  return (
    <div className="App">
      <header className="App-header text-center p-6 bg-[#a3931e] font-mono text-gray-100 text-2xl">
        Scripty
      </header>
      <div className="bg-[#343434] text-center p-3 text-xl text-gray-300 raleway-f1">Create. Manage. Safe.</div>
      <div className="main flex h-screen text-white">
        <div className="sidebar border-r-1 border-gray-500 w-1/4 flex flex-col pt-5 px-3 gap-2 text-gray-300">
          <Sidebar/>
        </div>
        <div className="content w-full">
          <Content/>
        </div>
      </div>
    </div>
  );
}

export default App;
