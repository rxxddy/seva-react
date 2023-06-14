import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
// import { random } from "lodash";
import React, { useState } from "react";
import EditableGridLayout from "../components/editable-grid-layout";

const Home = () => {
  let initial = [
    { i: "x", x: 0, y: 0, w: 6, h: 8, maxH: 12 },
    { i: "b", x: 7, y: 0, w: 6, h: 4, maxH: 12 },
    { i: "a", x: 7, y: 5, w: 6, h: 4, maxH: 12 },
    { i: "c", x: 0, y: 9, w: 8, h: 3, maxH: 12 },
    { i: "e", x: 9, y: 9, w: 4, h: 3, maxH: 12 }
  ];
  const [layout, setLayout] = useState(initial);
  const [counter, setCounter] = useState(0);

  const onLayoutChange = (newLayout) => {
    console.log(newLayout);
    setLayout(newLayout);
  };

  const onAddItem = () => {
    const newLayout = [
      ...layout,
      {
        i: "n" + counter,
        x: (5 * 2) % (4 || 12),
        y: counter + 2,
        w: 12,
        h: 4
      }
    ];
    setLayout(newLayout);
    setCounter(counter + 1);
    console.log("adding", "n" + counter);
    // alert(`new layout ${newLayout[newLayout.length - 1].y}`);
  };

  return (
    <>
      
      <EditableGridLayout layout={layout} onLayoutChange={onLayoutChange} style={{ backgroundColor: "white"}}/>
      <Fab
        color="inherit"
        aria-label="add"
        onClick={onAddItem}
        style={{ padding: "5px", alignItems: "bottom-right", backgroundColor: "white"}}
        
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Home;
