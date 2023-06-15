import React from "react";
import {BrowserRouter, Routes , Route, Link } from "react-router-dom";
import Home from "./components/home";
import "./styles.css";
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';


export default function App() {
  
  let accounts = [
    { number: 1, account: 'giga235', type: 'sell', instrument: 2 },
    { number: 2, account: 'hokker21', type: 'sell', instrument: 2 },
    { number: 3, account: 'kolomba4', type: 'buy', instrument: 9 },
    { number: 4, account: 'gondorash2345', type: 'buy', instrument: 7 },
  ];

  return (
    <div className="App h-[100vh]">
      <BrowserRouter>
        
        <div className="flex flex-row m-auto w-[80%] mt-16 mb-4 rounded-3xl gap-10">
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
                  <div className="w-3/12 flex justify-center">{item.type}</div>
                  <div className="w-4/12 flex justify-center">{item.instrument}</div>
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
