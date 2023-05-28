import React, { useState } from "react";
import "./BookingPage.css";

import AddBooking from "../../components/AddBooking/AddBooking";
import BookingSummary from "../../components/BookingSummary/BookingSummary";


import { Route, Routes } from "react-router-dom";

const BookingPage = (props) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTower, setSelectedTower] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedFloor, setSelectedFloor] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDesk, setSelectedDesk] = useState("");


  const user = {
    
    id: 610000000, 
    firstname: "Sophie", 
    surname: "Simpson", 

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

  const isNextButtonShown =
    selectedLocation &&
    selectedTower &&
    selectedDepartment &&
    selectedFloor &&
    selectedDate &&
    selectedTime &&
    selectedDesk;

  return (
    <Routes>
      <Route
        path="create"
        element={
          <AddBooking
            handleDateSelected={handleDateSelected}
            handleTimeSelected={handleTimeSelected}
            handleLocationSelected={handleLocationSelected}
            handleTowerSelected={handleTowerSelected}
            handleDepartmentSelected={handleDepartmentSelected}
            handleFloorSelected={handleFloorSelected}
            handleDeskClick={handleDeskClick}
            selectedDesk={selectedDesk}
            selectedLocation={selectedLocation}
            selectedDepartment={selectedDepartment}
            selectedTower={selectedTower}
            selectedFloor={selectedFloor}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            isNextButtonShown={isNextButtonShown}
          />
        }
      />
      <Route path="summary" element={<BookingSummary user={user} selectedDesk={selectedDesk} selectedDate={selectedDate} selectedTime={selectedTime} selectedFloor={selectedFloor}/>} />
    </Routes>
  );
};

export default BookingPage;
