import React from "react";
import "./FloorLayout.css";

import RiversideFloorPlan from "./RiversideFloorPlan/RiversideFloorPlan";

const FloorLayout = (props) => {
  let floorPlan = null;

  if (
    props.selectedLocation === "Belfast" &&
    props.selectedTower === "Riverside" && props.selectedFloor !== "" && props.selectedTime !== "" && props.selectedDate

  ) {
    floorPlan = (
      <RiversideFloorPlan
        handleDeskClick={props.handleDeskClick}
        selectedDesk={props.selectedDesk}
        selectedLocation={props.selectedLocation}
        selectedTower={props.selectedTower}
        selectedFloor={props.selectedFloor}
        selectedDate={props.selectedDate}
      />
    );
  }
  //add else when more locations are added to the database

  return (
    <>
      <section>
        <div className="floor">{floorPlan}</div>
      </section>
    </>
  );
};

export default FloorLayout;
