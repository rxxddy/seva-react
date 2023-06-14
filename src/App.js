import React from "react";
import {BrowserRouter, Routes , Route, Link } from "react-router-dom";
import Home from "./components/home";
import "./styles.css";

export default function App() {
  return (
    <div className="App h-[100vh]">
      <BrowserRouter>
        
        <div className="flex flex-row m-auto w-[80%] mt-16 mb-4 rounded-3xl gap-10">
          {/* <div className="basis-1/12 bg-[#343434] rounded-2xl flex h-16 text-[white] items-center">01</div> */}
          {/* <div className="basis-4/12 bg-[#343434] rounded-2xl flex h-16 text-[white] items-center">02</div> */}
          <div className="contents flex-row m-auto w-[50%] mt-16 mb-4 rounded-3xl gap-10">
            <div className="basis-2/12 bg-[#343434] rounded-2xl flex h-16 text-[white] items-center">01</div>
            <div className="basis-7/12 bg-[#343434] rounded-2xl flex h-16 text-[white] items-center">02</div>
          </div>
          <div className="contents flex-row m-auto w-[50%] mt-16 mb-4 rounded-3xl gap-10">
            <div className="basis-4/6 flex bg-[#343434] rounded-2xl h-16 text-[white] items-center">03</div>
            <div className="basis-2/6 bg-[#343434] rounded-2xl flex h-16 text-[white] items-center">04</div>
          </div>
        </div>
        <div className="flex flex-row m-auto w-[80%] mt-8 mb-24 rounded-3xl gap-10">
          <div className="basis-1/12 bg-[#343434] rounded-3xl flex ">01</div>
          <div className="basis-4/12 bg-[#343434] rounded-3xl flex ">02</div>
          <div className="basis-7/12 flex bg-[#343434] rounded-3xl">
            <Routes>
              <Route path="/" exact element={<Home/>} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}
