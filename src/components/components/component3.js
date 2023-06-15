import React, { useState } from "react";

const Component3 = () => {

  const [percentage, setPercentage] = useState(69);

  const filledWidth = `${percentage}%`;

  let items = [
    { workBalance: '785', proccesses: '24', percentage: '56' },

  ];

  return <div>

  <div className="flex justify-between text-[#181818] bg-[#FFCC4A] p-2 rounded-xl w-full">
    <p>Статистика работы:</p>
    <p>Filter: all</p>
  </div>
  <div className="w-full p-1 text-[#FFCC4A] flex justify-center">
    <p className="m-auto">69%</p>
  </div>
    <div className="w-full p-1 text-[#FFCC4A]">
      <div className="w-full rounded-2xl border-[#FFCC4A] border-2">
        <div className="bg-[#FFCC4A] p-6 rounded-xl" style={{ width: filledWidth }}></div>
      </div>
    </div>

      
        {items.map((item, index) => (
          <div className="flex items-end p-4 text-[#E0E0E0] text-[0.8em] flex-col leading-6">
            <p className="w-full">
              Актуальный баланс в работе: <span className="text-bold">{item.workBalance}</span> USD
            </p>
            <p className="w-full">
              Процессы в работе: <span className="text-bold">{item.proccesses}</span>
            </p>
            <p className="w-full">
              Средний % заработка: <span className="text-bold">{item.percentage}</span>%
            </p>
          </div>
        ))}
      


</div>;
};

export default Component3;