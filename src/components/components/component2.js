import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Component2 = () => {

  const data = [
    { month: 'Jan', balance: 2000 },
    { month: 'Feb', balance: 1500 },
    { month: 'Mar', balance: 1800 },
    { month: 'Apr', balance: 2500 },
    { month: 'May', balance: 2200 },
    { month: 'Jun', balance: 2345 },
  ];



  return <div className="h-full">

          <div className="p-4 w-full">
            <p className="font-normal text-[#c0c0c0] text-sm">Balance:</p>
            <p className="font-bold text-white">2,345 USD</p>
          </div>

      
        
          <div className="flex items-end h-full">
           <div className="mb-[25%]">
    
            <LineChart width={400} height={200} data={data}>
              <XAxis dataKey="month"  className="text-xs"/>
              <YAxis className="text-xs"/>
              <Tooltip  className="text-xs"/>
              <Legend  className="text-xs"/>
              <Line type="monotone" dataKey="balance" stroke="#DE9CED" activeDot={{ r: 8 }} />
            </LineChart>
          </div>
          </div>

      


</div>;;
};

export default Component2;