import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

import "./DateTimeSection.css";

const DateTimeSection = (props) => {
  const [nextFiveDates, setNextFiveDates] = useState([]);


  useEffect(() => {
    if (nextFiveDates.length === 0) {
      let startDate = new Date();
      const tempDates = [];
      for (let i = 0; i < 5; i++) {
        startDate = getNextWorkingDay(startDate);
        tempDates.push({ index: i, date: startDate, isSelected: false });
      }
      setNextFiveDates(tempDates);
    }
  }, [nextFiveDates])



  const getNextWorkingDay = (startDate) => {
    let currentDate = new Date(startDate);
    const dayOfWeek = currentDate.getDay();
    const daysUntilNextWorkingDay =
      dayOfWeek === 5 ? 3 : dayOfWeek === 6 ? 2 : 1;
    currentDate.setDate(currentDate.getDate() + daysUntilNextWorkingDay);
    return currentDate;
  };

  const formatDate = (date) => {
    const suffixes = ["st", "nd", "rd", "th"];
    const day = date.getDate();

    const suffix =
      suffixes[(day - 1) % 10] || suffixes[(day - 11) % 10] || suffixes[3];

    return `${date.toLocaleDateString("en-US", {
      weekday: "long",
    })} ${date.getDate()}${suffix} ${date.toLocaleDateString("en-US", {
      month: "long",
    })}`;
  };

  const dateOptions = nextFiveDates.map((date) => (
    <option key={date.index} value={date.date}>
      {formatDate(date.date)}
    </option>
  ));

  const timeOptions = ["All Day", "Morning", "Afternoon"].map((time, index) => (
    <option key={index} value={time}>
      {time}
    </option>
  ));



  return (
    <div className="date-time-container">
      <h2>Date and Time</h2>
      <div className="sub-heading-container">
        <h3 id="date-sub-heading" className="sub-heading">
          Pick a date
        </h3>
        <select onChange={props.handleDateSelected} className="select-box">
          <option value="">Select a date</option>
            {dateOptions}
        </select>
        <h3 id="time-sub-heading" className="sub-heading">
          Pick a time
        </h3>
        <select onChange={props.handleTimeSelected} className="select-box">
          <option value="">Select a time</option>
            {timeOptions}
        </select>
      </div>
    </div>
  );
};

export default DateTimeSection;
