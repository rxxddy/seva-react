import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
// import { random } from "lodash";
import React, { useState } from "react";
import EditableGridLayout from "../components/editable-grid-layout";

const Home = () => {
  let initial = [
    { i: "x", x: 0, y: 0, w: 5, h: 12, maxH: 12 },
    { i: "b", x: 9, y: 3, w: 3, h: 3, maxH: 12 },
    { i: "a", x: 5, y: 2, w: 4, h: 3, maxH: 12 },
    { i: "c", x: 5, y: 4, w: 4, h: 3, maxH: 12 },
    { i: "e", x: 9, y: 4, w: 3, h: 3, maxH: 12 },
    { i: "f", x: 5, y: 6, w: 4, h: 3, maxH: 12 },
    { i: "g", x: 9, y: 6, w: 3, h: 3, maxH: 12 },
    { i: "N", x: 5, y: 6, w: 4, h: 3, maxH: 12 },
    { i: "M", x: 9, y: 6, w: 3, h: 3, maxH: 12 },
  ];
  const [layout, setLayout] = useState(initial);
  const [counter, newCounter] = useState(0);

  const onLayoutChange = (newLayout) => {
    console.log(newLayout);
    setLayout(newLayout);
  };

  const onAddItem = () => {
    newCounter(counter + 1);
    /*eslint no-console: 0*/
    console.log("adding", "n" + counter);
    initial.push({
      i: "n" + counter,
      x: (5 * 2) % (4 || 12),
      y: counter + 2, // puts it at the bottom
      w: 2,
      h: 2,
      minH: 0,
      maxH: 12
      // Increment the counter to ensure key is always unique.
    });
    alert(`new layout ${initial[initial.length - 1].y}`);
  };

  return (
    <>
      
      <EditableGridLayout layout={layout} onLayoutChange={onLayoutChange} />
      <Fab
        color="primary"
        aria-label="add"
        onClick={onAddItem}
        style={{ padding: "5px", alignItems: "bottom-right" }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Home;
