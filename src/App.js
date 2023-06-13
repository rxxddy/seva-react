import React from "react";
import {BrowserRouter, Routes , Route, Link } from "react-router-dom";
import Home from "./components/home";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <div className="flex flex-row m-auto w-[80%] mt-24 mb-24 rounded-3xl">
          <div className="basis-1/4 bg-gray-500 flex ">01</div>
          <div className="basis-1/4 flex ">02</div>
          <div className="basis-1/2 flex bg-gray-400">
            <Routes>
              <Route path="/" exact element={<Home/>} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}
