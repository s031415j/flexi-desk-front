import React from "react";
import "./AddBooking.css";

import BookingSideBar from "../../components/BookingSideBar/BookingSideBar";
import FloorLayout from "../../components/FloorLayout/FloorLayout";

import { Link } from "react-router-dom";

const AddBooking = (props) => {
  return (
    <>
      <section>
        <div className="row">
          <div className="coloumn-1">
            <div className="add-booking-container">
              <BookingSideBar
                handleDateSelected={props.handleDateSelected}
                handleTimeSelected={props.handleTimeSelected}
                handleLocationSelected={props.handleLocationSelected}
                handleTowerSelected={props.handleTowerSelected}
                handleDepartmentSelected={props.handleDepartmentSelected}
                handleFloorSelected={props.handleFloorSelected}
                selectedLocation={props.selectedLocation}
                selectedDepartment={props.selectedDepartment}
                selectedTower={props.selectedTower}
                selectedFloor={props.selectedFloor}
              />
            </div>
          </div>
          <div className="coloumn-2">
            <FloorLayout
              handleDeskClick={props.handleDeskClick}
              selectedDesk={props.selectedDesk}
              selectedLocation={props.selectedLocation}
              selectedDepartment={props.selectedDepartment}
              selectedTower={props.selectedTower}
              selectedFloor={props.selectedFloor}
              selectedDate={props.selectedDate}
              selectedTime={props.selectedTime}
            />
          </div>
          <div className="coloumn-3">
            <div className="row right-row">
              <div id="key-coloumn-1" className="coloumn-1">
                <div className="key-container">
                  <div className="key selected-desk"></div>
                  <p className="tag">Selected</p>
                </div>
                <div className="key-container">
                  <div className="key available-desk"></div>
                  <p className="tag">Available</p>
                </div>
              </div>
              <div id="key-coloumn-2" className="coloumn-2">
                <div className="key-container">
                  <div className="key unavailable-desk"></div>
                  <p className="tag">Unavailable</p>
                </div>
                <div className="key-container">
                  <div className="key standing-desk"></div>
                  <p className="tag">Standing Desk</p>
                </div>
              </div>
            </div>
            {props.isNextButtonShown && (
              <div className="next-btn">
                <button className="primary-btn">
                  <Link className="btn" to="/booking/summary">
                    Next
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default AddBooking;
