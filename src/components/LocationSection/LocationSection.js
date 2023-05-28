import React from "react";
import "./LocationSection.css";

import LocationList from "../Lists/LocationList"
import DepartmentList from "../Lists/DepartmentList";
import TowerList from "../Lists/TowerList";

const LocationSection = (props) => {

  return (
    <div className="location-container">
      <div className="city-container">
        <h2>Location</h2>
        <h3>City</h3>
        <LocationList handleLocationSelected={props.handleLocationSelected} />
      </div>
      {props.selectedLocation && (
        <div className="radio-container">
          <TowerList selectedLocation={props.selectedLocation} selectedTower={props.selectedTower} handleTowerSelected={props.handleTowerSelected}></TowerList>
        </div>
      )}

      <div className="department-container">
        <h3>Department within BT</h3>
        <DepartmentList handleDepartmentSelected={props.handleDepartmentSelected} selectedDepartment={props.selectedDepartment} handleFloorSelected={props.handleFloorSelected} selectedFloor={props.selectedFloor}/>
      </div>
    </div>
  );
};

export default LocationSection;
