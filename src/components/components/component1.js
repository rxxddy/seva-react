import React from "react";

const Component1 = () => {

  let items = [
    { name: 'USP Blue', price: '3', account: '1' },
    { name: 'AWP Green', price: '16', account: '5' },
    { name: 'Ak-47 Blud', price: '36', account: '5' },
    { name: 'AWP Cosandra', price: '234', account: '2' },
    { name: 'M9 Doppler', price: '578', account: '3' },
  ];

  return <div>

  <div className="flex justify-between text-[#181818] bg-[#4DD592] p-4 rounded-xl w-full">
    <p>Последние действия:</p>
    <p>Filter: all</p>
  </div>

      
        {items.map((item, index) => (
          <div className="flex items-end my-4 p-4">
            <div className="w-[2em] h-[2em] mr-1">
              <div className="rounded-full bg-[#FFCC4A] w-full h-full flex justify-center items-center">
                <p key={index}>{item.account}</p>
              </div>
            </div>

            <div className="text-white text-sm bg-[#343434] p-4 rounded-xl rounded-bl-sm w-full font-normal">
              <p key={index}>
                Bought <span className="font-bold">{item.name}</span> for <span className="font-bold">{item.price}</span> USD
              </p>
            </div>
          </div>
        ))}
      


</div>;
};

export default Component1;