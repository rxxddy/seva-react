import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
// import { random } from "lodash";
import React, { useState } from "react";
import EditableGridLayout from "../components/editable-grid-layout";

const Home = () => {
  let initial = [
    { i: "component1", x: 0, y: 0, w: 6, h: 10, maxH: 14 },
    { i: "component2", x: 7, y: 0, w: 6, h: 6, maxH: 14 },
    { i: "component3", x: 7, y: 5, w: 6, h: 4, maxH: 14 },
    { i: "component4", x: 0, y: 10, w: 8, h: 3, maxH: 14 },
    { i: "component5", x: 9, y: 10, w: 4, h: 3, maxH: 14 }
  ];
  const [layout, setLayout] = useState(initial);
  const [counter, setCounter] = useState(0);

  const onLayoutChange = (newLayout) => {
    console.log(newLayout);
    setLayout(newLayout);
  };

  // const onAddItem = () => {
  //   const newLayout = [
  //     ...layout,
  //     {
  //       i: "n" + counter,
  //       x: (5 * 2) % (4 || 12),
  //       y: counter + 2,
  //       w: 12,
  //       h: 4
  //     }
  //   ];
  //   setLayout(newLayout);
  //   setCounter(counter + 1);
  //   console.log("adding", "n" + counter);
  //   // alert(`new layout ${newLayout[newLayout.length - 1].y}`);
  // };

  return (
    <>
      
      <EditableGridLayout layout={layout} onLayoutChange={onLayoutChange} style={{ backgroundColor: "white"}}/>
      {/* <Fab
        color="inherit"
        aria-label="add"
        onClick={onAddItem}
        style={{ padding: "5px", alignItems: "bottom-right", backgroundColor: "white"}}
        
      >
        <AddIcon />
      </Fab> */}
    </>
  );
};

export default Home;
