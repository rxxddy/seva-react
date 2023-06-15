import { KingBedOutlined } from "@material-ui/icons";
import React from "react";

const Component5 = () => {

  let items = [
    { number: '1', percentage: '69'},
    { number: '2', percentage: '62'},
    { number: '3', percentage: '57'},
    { number: '4', percentage: '52'},
  ];

  return <div>

  <div className="flex justify-between text-[#181818] bg-[#DE9CED] p-1 rounded-xl w-full">
    <p>Сетапы настроек:</p>
  </div>
  <div className="w-full">
    <div className="">
      <div className="grid grid-cols-2 gap-4 p-4 mt-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-[#E0E0E0] bg-transparent rounded-md p-2 border-2 border-[#DE9CED] text-sm"
          >
            <p>Аккаунт: {item.number}</p>
            <div className="relative">
              <div className="w-[0.8em] h-[0.8em] rounded-sm p-1 bg-[#DE9CED]"></div>
              <div className="absolute top-[0.1em] right-[0.1em] w-[0.8em] h-[0.8em] rounded-sm p-1 bg-gray-700"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

</div>;
};

export default Component5;