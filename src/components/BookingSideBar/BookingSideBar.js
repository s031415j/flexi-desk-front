import React from "react";
import LocationSection from "../LocationSection/LocationSection";
import DateTimeSection from "../DateAndTimeSection/DateTimeSection";
import "./BookingSideBar.css";

const BookingSideBar = (props) => {
  return (
    <div className="sidebar">
      <LocationSection
        handleLocationSelected={props.handleLocationSelected}
        handleTowerSelected={props.handleTowerSelected}
        handleDepartmentSelected={props.handleDepartmentSelected}
        handleFloorSelected={props.handleFloorSelected}
        selectedLocation={props.selectedLocation}
        selectedDepartment={props.selectedDepartment}
        selectedTower={props.selectedTower}
        selectedFloor={props.selectedFloor}
      />
      <div className="date-time-section">
        <DateTimeSection
          handleDateSelected={props.handleDateSelected}
          handleTimeSelected={props.handleTimeSelected}
        />
      </div>

      <div className="next-btn"></div>
    </div>
  );
};

export default BookingSideBar;
