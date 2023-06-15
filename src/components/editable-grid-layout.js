import React from "react";
import _ from "lodash";
import GridLayout from "react-grid-layout";
import { Card, CardContent } from "@material-ui/core";

const EditableGridLayout = ({ layout, onLayoutChange }) => {
  const createElement = (el) => {
    return (
      <Card elevation={3} key={el.i} style={{ backgroundColor: "#181818"}}>
        <CardContent>{el.i}</CardContent>
      </Card>
    );
  };

  return (
    <GridLayout
      cols={12}
      className="layout"
      layout={layout}
      rowHeight={50}
      width={900}
      onLayoutChange={onLayoutChange}
      style={{}}
    >
      {_.map(layout, (el) => createElement(el))}
    </GridLayout>
  );
};

export default EditableGridLayout;