import React, { useEffect, useState } from "react";
import "./EditBooking.css";

import { Link } from "react-router-dom";
import BookingSideBar from "../BookingSideBar/BookingSideBar";
import FloorLayout from "../FloorLayout/FloorLayout";
import Booking from "../../services/Booking";

const EditBooking = (props) => {
  const [bookingToUpdate, setBookingToUpdate] = useState({});
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTower, setSelectedTower] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedFloor, setSelectedFloor] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDesk, setSelectedDesk] = useState("");

  useEffect(() => {
    Booking.getById(props.booking).then((response) => {
      const updatedBooking = response.data;
      setBookingToUpdate(updatedBooking);
      console.log("updatedBooking: ", updatedBooking);
    });
  }, [props.booking]);

  const formatDate = (date) => {
    const dateObject = new Date(date);

    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(dateObject.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    return <>{formattedDate}</>;
  };

  const handleUpdateBooking = () => {
    const formattedDate = formatDate(selectedDate);
    const jwt = require("jsonwebtoken");

    const newUpdatedBooking = {
      userId: {
        id: jwt.verify(localStorage.getItem("token"), "KMNTHWdo5XUPBPxhJc5WF9WzfIRdwm5YIJLQgVV+E/wufMM9rX0AnbZgPMvTN7YYHex7GfKUEG4MT8lTnfobLw=="),
      },
      deskId: {
        id: selectedDesk,
      },
      date: formattedDate.props.children,
      time: selectedTime,
      isAnonymous: bookingToUpdate.isAnonymous,
    };

    Booking.updateBooking(bookingToUpdate.id, newUpdatedBooking)
      .then((response) => {
        console.log(newUpdatedBooking);
        props.onClose();
      })
      .catch((error) => {
        console.log("Update booking error:", error.response);
      });
  };

  const handleLocationSelected = (event) => {
    const selectedLocation = event.target.value;
    setSelectedLocation(selectedLocation);
  };

  const handleTowerSelected = (event) => {
    const selectedTower = event.target.value;
    setSelectedTower(selectedTower);
  };

  const handleDepartmentSelected = (event) => {
    const selectedDepartment = event.target.value;
    setSelectedDepartment(selectedDepartment);
  };

  const handleFloorSelected = (event) => {
    const selectedFloor = event.target.value;
    setSelectedFloor(selectedFloor);
  };

  const handleDateSelected = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  };

  const handleTimeSelected = (event) => {
    const selectedTime = event.target.value;
    setSelectedTime(selectedTime);
  };

  const handleDeskClick = (id) => {
    setSelectedDesk(id);
  };

  const isSaveButtonShown =
    selectedLocation &&
    selectedTower &&
    selectedDepartment &&
    selectedFloor &&
    selectedDate &&
    selectedTime &&
    selectedDesk;

  //EDIT BY DATE STUFF

  console.log(bookingToUpdate);

  const updateById = () => {
    const formattedDate = formatDate(selectedDate);

    const newUpdatedBooking = {
      userId: {
        id: bookingToUpdate.userId,
      },
      deskId: {
        id: selectedDesk,
      },
      date: formattedDate.props.children,
      time: selectedTime,
      isAnonymous: bookingToUpdate.isAnonymous,
    };

    Booking.updateBooking(bookingToUpdate.id, newUpdatedBooking)
      .then((response) => {
        console.log(newUpdatedBooking);
        props.onClose();
      })
      .catch((error) => {
        console.log("Update booking error:", error.response);
      });
  };

  return (
    <>
      <section>
        <div className="row">
          <div className="coloumn-1">
            <div className="add-booking-container">
              <BookingSideBar
                handleDateSelected={handleDateSelected}
                handleTimeSelected={handleTimeSelected}
                handleLocationSelected={handleLocationSelected}
                handleTowerSelected={handleTowerSelected}
                handleDepartmentSelected={handleDepartmentSelected}
                handleFloorSelected={handleFloorSelected}
                selectedLocation={selectedLocation}
                selectedDepartment={selectedDepartment}
                selectedTower={selectedTower}
                selectedFloor={selectedFloor}
              />
            </div>
          </div>
          <div className="coloumn-2">
            <FloorLayout
              handleDeskClick={handleDeskClick}
              selectedDesk={selectedDesk}
              selectedLocation={selectedLocation}
              selectedDepartment={selectedDepartment}
              selectedTower={selectedTower}
              selectedFloor={selectedFloor}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
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
            {isSaveButtonShown && (
              <div className="next-btn">
                <button className="primary-btn" onClick={handleUpdateBooking}>
                  <Link className="btn">Save Details</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default EditBooking;
