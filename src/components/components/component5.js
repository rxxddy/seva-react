import { KingBedOutlined } from "@material-ui/icons";
import React from "react";

const Component5 = () => {

  let items = [
    { number: '1', percentage: '69'},
    { number: '2', percentage: '62'},
    { number: '3', percentage: '57'},
    { number: '4', percentage: '52'},
    { number: '5', percentage: '41'},
    { number: '6', percentage: '33'},
  ];

  return <div>

  <div className="flex justify-between text-[#181818] bg-[#DE9CED] p-1 rounded-xl w-full">
    <p>Сетапы настроек:</p>
  </div>
  <div className="w-full">
    <div className="">
      <div className="grid grid-cols-2 gap-2 p-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-[#E0E0E0] bg-transparent rounded-md p-1 border-2 border-[#DE9CED] text-base"
          >
            <p>Аккаунт: {item.number}</p>
            <p>{item.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  
</div>;
};

export default Component5;