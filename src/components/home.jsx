import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
// import { random } from "lodash";
import React, { useState } from "react";
import EditableGridLayout from "../components/editable-grid-layout";

const Home = () => {
  let initial = [
    { i: "xyi", x: 0, y: 0, w: 6, h: 2 },
    { i: "a", x: 0, y: 2, w: 1, h: 2 },
    { i: "b", x: 1, y: 3, w: 3, h: 2 },
    { i: "c", x: 4, y: 2, w: 2, h: 2 },
    { i: "e", x: 0, y: 4, w: 6, h: 1 }
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
      h: 2
      // Increment the counter to ensure key is always unique.
    });
    alert(`new layout ${initial[initial.length - 1].y}`);
  };

  return (
    <>
      <h1>Hello CodeSandbox</h1>
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
