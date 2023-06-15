import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes , Route } from "react-router-dom";

import "./styles.css";
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';

// import { random } from "lodash";

import EditableGridLayout from "./components/editable-grid-layout";
import Cookies from "js-cookie";

export default function App() {
  
  let accounts = [
    { number: 1, account: 'nugga234', types: ['sell']},
    { number: 2, account: 'ue2358', types: ['sell']},
    { number: 3, account: 'stmfckr', types: ['buy', 'sell'], instrument: 9 },
    { number: 4, account: 'billy228', types: ['buy']},
    { number: 5, account: 'vasyaae', types: ['buy']},
  ];

  let initial = [
    { i: "component1", x: 0, y: 0, w: 6, h: 10, maxH: 14 },
    { i: "component2", x: 7, y: 0, w: 6, h: 6, maxH: 14 },
    { i: "component3", x: 7, y: 5, w: 6, h: 4, maxH: 14 },
    { i: "component4", x: 0, y: 10, w: 8, h: 3, maxH: 14 },
    { i: "component5", x: 9, y: 10, w: 4, h: 3, maxH: 14 }
  ];
  const [layout, setLayout] = useState(initial);
  const [counter, setCounter] = useState(0);


  // Load layout from cookies if it exists
  useEffect(() => {
    const savedLayout = Cookies.get("layout");
    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    }
  }, []);

  // Save layout to cookies whenever it changes
  useEffect(() => {
    Cookies.set("layout", JSON.stringify(layout));
  }, [layout]);

  const onLayoutChange = (newLayout) => {
    console.log(newLayout);
    setLayout(newLayout);
  };

  const resetLayout = () => {
    setLayout(initial);
    Cookies.remove("layout");
  };

  return (
    <div className="App h-[100vh]">
      <BrowserRouter>
        
        <div className="flex flex-row m-auto w-[80%] mt-8 mb-4 rounded-3xl gap-10">
          {/* <div className="basis-1/12 bg-[#343434] rounded-2xl flex h-16 text-[white] items-center">01</div> */}
          {/* <div className="basis-4/12 bg-[#343434] rounded-2xl flex h-16 text-[white] items-center">02</div> */}
          <div className="contents flex-row m-auto w-[50%] mt-16 mb-4 rounded-3xl gap-10">
            <div className="basis-2/12 bg-[#343434] rounded-2xl flex h-16 text-[white] items-center">
            
            </div>
            <div className="basis-7/12 bg-[#343434] rounded-2xl flex h-16 text-[white] items-center justify-between p-4">
              <div>
                <p>Upload Accounts</p>
              </div>
              <div className="p-2 rounded-full bg-[#FFCC4A]">
                <AddIcon className="text-black " />
              </div>
            </div>
          </div>
          <div className="contents flex-row m-auto w-[50%] mt-16 mb-4 rounded-3xl gap-10">
            <div className="basis-4/6 flex bg-[#343434] rounded-2xl h-16 text-[white] items-center">
              <button onClick={resetLayout} className="bg-black w-[3.2em] h-[3.2em] ml-8 rounded-md text-md flex justify-center items-center">R</button>
            </div>
            <div className="basis-2/6 bg-[#343434] rounded-2xl flex h-16 text-[white] items-center justify-between p-4">
              <div>
                <p>PRO+</p>
              </div>
              <div className="p-2 rounded-full bg-[#DFA3EE]">
                <PersonIcon className="text-black " />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row m-auto w-[80%] mt-8 mb-24 rounded-3xl gap-10">
          <div className="basis-1/12 bg-[#343434] rounded-3xl flex ">
          
          </div>
          
          <div className="basis-4/12 bg-[#343434] rounded-3xl flex ">


            <div className="flex flex-col w-full text-sm p-2">
              <div className="flex bg-[#DFA3EE] p-2 rounded-xl text-[#252525] font-normal justify-center">
                <div className="w-1/4 flex justify-center">Все</div>
                <div className="w-1/4 flex justify-center">Покупка</div>
                <div className="w-1/4 flex justify-center">Продажа</div>
                <div className="w-1/4 flex justify-center">Авто</div>
              </div>
              <div className="flex p-2 rounded-xl text-[#f6f6f6a1] font-light items-center mt-8">
                <div className="w-2/12 flex justify-center">№</div>
                <div className="w-4/12 ">Аккаунт</div>
                <div className="w-3/12 flex justify-center">Тип</div>
                <div className="w-4/12 flex justify-center">Инструменты</div>
              </div>
              {accounts.map((item) => (
                <div key={item.number} className="flex p-2 text-[#E5E5E5] mt-2 items-center">
                  <div className="w-2/12 flex justify-center">{item.number}</div>
                  <div className="w-4/12 ">{item.account}</div>
                  <div className="w-3/12 flex justify-center">
                    {item.types.map((type) => (
                      <p
                        key={type}
                        className={`p-1 mx-1 rounded-full text-[#252525] ${type === 'buy' ? 'bg-[#4DD592]' : 'bg-[#FFCC4A]'}`}
                      >
                        {type}
                      </p>
                    ))}
                  </div>
                  <div className="w-4/12 flex justify-center">
                    <div className="relative ml-2">
                      <div className="w-[0.8em] h-[0.8em] rounded-sm p-1 bg-[#DE9CED]"></div>
                      <div className="absolute top-[0.1em] right-[0.1em] w-[0.8em] h-[0.8em] rounded-sm p-1 bg-gray-700"></div>
                    </div>
                    <div className="relative ml-2">
                      <div className="w-[0.8em] h-[0.8em] rounded-sm p-1 bg-[#4DD592]"></div>
                      <div className="absolute top-[0.1em] right-[0.1em] w-[0.8em] h-[0.8em] rounded-sm p-1 bg-gray-700"></div>
                    </div>
                    <div className="relative ml-2">
                      <div className="w-[0.8em] h-[0.8em] rounded-sm p-1 bg-[#FFCC4A]"></div>
                      <div className="absolute top-[0.1em] right-[0.1em] w-[0.8em] h-[0.8em] rounded-sm p-1 bg-gray-700"></div>
                    </div>
                  </div>
                </div>
              ))}
             
                <div className="flex flex-col items-end mt-auto w-full text-sm p-3 pb-2">
                  <div className="bg-[#181818] rounded-xl p-2">
                    <p className="w-full py-1 text-[#ffffffc4] mb-2">Manually Upload:</p>
                    <div className="flex space-x-4 mb-2">
                      <input type="text" placeholder="Login" className="w-3/12 px-2 py-1 border bg-[#6a6a6a] rounded text-[#ffffff]" />
                      <input type="text" placeholder="Password" className="w-4/12 px-2 py-1 border bg-[#6a6a6a] rounded text-[#ffffff]" />
                      <input type="text" placeholder="Token" className="w-5/12 px-2 py-1 border bg-[#6a6a6a] rounded text-[#ffffff]" />
                    </div>
                  </div>
                </div>
              
            </div>

          </div>

          
          <div className="w-7/12 flex bg-[#343434] rounded-3xl h-[80vh] overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "transparent" }}>
            <div>
            <EditableGridLayout layout={layout} onLayoutChange={onLayoutChange} style={{ backgroundColor: "white"}}/>
            </div>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}
